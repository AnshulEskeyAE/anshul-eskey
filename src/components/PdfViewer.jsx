import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Loader2 } from "lucide-react";

const PDF_JS_VERSION = "2.16.105";
const PDF_JS_SRC = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDF_JS_VERSION}/pdf.min.js`;
const PDF_JS_WORKER_SRC = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDF_JS_VERSION}/pdf.worker.min.js`;

export const PdfViewer = ({ url }) => {
  const [pdf, setPdf] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);
  const [libLoaded, setLibLoaded] = useState(false);
  const [error, setError] = useState(null);

  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const renderTaskRef = useRef(null);

  // 1. Dynamic Script Loading for PDF.js
  useEffect(() => {
    if (window.pdfjsLib) {
      setLibLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = PDF_JS_SRC;
    script.async = true;
    script.onload = () => {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDF_JS_WORKER_SRC;
      setLibLoaded(true);
    };
    script.onerror = () => {
      setError("Failed to load PDF viewer libraries. Please check your internet connection.");
      setLoading(false);
    };
    document.body.appendChild(script);

    return () => {
      // Clean up script if unmounted before loading
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // 2. Load PDF Document
  useEffect(() => {
    if (!libLoaded || !url) return;

    setLoading(true);
    setError(null);
    setPdf(null);
    setPageNum(1);

    const loadingTask = window.pdfjsLib.getDocument(url);
    loadingTask.promise
      .then((loadedPdf) => {
        setPdf(loadedPdf);
        setNumPages(loadedPdf.numPages);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading PDF:", err);
        setError("Could not load PDF document. Please try downloading it directly.");
        setLoading(false);
      });

    return () => {
      if (loadingTask) {
        loadingTask.destroy();
      }
    };
  }, [libLoaded, url]);

  // 3. Render Page onto Canvas
  const renderPage = () => {
    if (!pdf || !canvasRef.current || !containerRef.current) return;

    // Cancel existing render task if any
    if (renderTaskRef.current) {
      renderTaskRef.current.cancel();
    }

    pdf.getPage(pageNum)
      .then((page) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Calculate responsive scaling
        const containerWidth = containerRef.current.clientWidth - 32; // padding offset
        const baseViewport = page.getViewport({ scale: 1.0 });
        const widthScale = containerWidth / baseViewport.width;
        
        // Final scale includes base width scale and user zoom factor
        const finalScale = widthScale * scale;
        const viewport = page.getViewport({ scale: finalScale });

        // High DPI setup
        const pixelRatio = window.devicePixelRatio || 1;
        canvas.width = viewport.width * pixelRatio;
        canvas.height = viewport.height * pixelRatio;
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        ctx.restore();
        ctx.save();
        ctx.scale(pixelRatio, pixelRatio);

        const renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;

        renderTask.promise
          .then(() => {
            renderTaskRef.current = null;
          })
          .catch((err) => {
            if (err.name !== "RenderingCancelledException") {
              console.error("Render error:", err);
            }
          });
      })
      .catch((err) => {
        console.error("Error getting page:", err);
      });
  };

  useEffect(() => {
    renderPage();
  }, [pdf, pageNum, scale]);

  // 4. Handle window resize to re-scale responsive layout
  useEffect(() => {
    const handleResize = () => {
      renderPage();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pdf, pageNum, scale]);

  const changePage = (offset) => {
    setPageNum((prev) => Math.min(Math.max(prev + offset, 1), numPages));
  };

  const adjustZoom = (factor) => {
    setScale((prev) => Math.min(Math.max(prev + factor, 0.5), 2.0));
  };

  return (
    <div
      ref={containerRef}
      style={{
        border: "1px solid var(--border-primary)",
        borderRadius: "var(--radius-md)",
        backgroundColor: "var(--bg-secondary)",
        padding: "var(--space-4)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-4)",
        width: "100%",
        position: "relative",
        boxSizing: "border-box"
      }}
    >
      {/* Control Bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingBottom: "var(--space-3)",
          borderBottom: "1px solid var(--border-secondary)",
          flexWrap: "wrap",
          gap: "10px"
        }}
      >
        {/* Navigation */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={() => changePage(-1)}
            disabled={pageNum <= 1 || loading}
            className="mono-btn"
            style={{ padding: "6px 12px", display: "flex", alignItems: "center", opacity: pageNum <= 1 ? 0.4 : 1 }}
          >
            <ChevronLeft size={16} />
          </button>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)" }}>
            Page {pageNum} of {numPages || "?"}
          </span>
          <button
            onClick={() => changePage(1)}
            disabled={pageNum >= numPages || loading}
            className="mono-btn"
            style={{ padding: "6px 12px", display: "flex", alignItems: "center", opacity: pageNum >= numPages ? 0.4 : 1 }}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Zoom Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <button
            onClick={() => adjustZoom(-0.2)}
            disabled={loading}
            className="mono-btn"
            style={{ padding: "6px 12px", display: "flex", alignItems: "center" }}
            title="Zoom Out"
          >
            <ZoomOut size={16} />
          </button>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--fs-small)", minWidth: "45px", textAlign: "center" }}>
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => adjustZoom(0.2)}
            disabled={loading}
            className="mono-btn"
            style={{ padding: "6px 12px", display: "flex", alignItems: "center" }}
            title="Zoom In"
          >
            <ZoomIn size={16} />
          </button>
        </div>
      </div>

      {/* Loading Overlay */}
      {loading && (
        <div
          style={{
            height: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)"
          }}
        >
          <Loader2 size={24} className="animate-spin" style={{ color: "var(--terminal-green)" }} />
          <span>LOADING DELIVERABLE DOCUMENT...</span>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div
          style={{
            height: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--terminal-orange)",
            fontFamily: "var(--font-mono)",
            textAlign: "center",
            padding: "var(--space-4)"
          }}
        >
          {error}
        </div>
      )}

      {/* Canvas Container */}
      <div
        style={{
          width: "100%",
          overflowX: "auto",
          display: loading || error ? "none" : "flex",
          justifyContent: "center",
          backgroundColor: "#151515",
          borderRadius: "var(--radius-sm)",
          padding: "var(--space-2) 0",
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.5)"
        }}
      >
        <canvas ref={canvasRef} style={{ display: "block" }} />
      </div>

      <style>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default PdfViewer;
