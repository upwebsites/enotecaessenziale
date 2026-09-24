import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure pdf.js worker: prefer local (public/pdf.worker.min.mjs), fallback to CDN

interface PdfFlipbookProps {
  url: string;
}

const PdfFlipbook: React.FC<PdfFlipbookProps> = ({ url }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [workerReady, setWorkerReady] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pageWidth, setPageWidth] = useState<number>(800);

  useEffect(() => {
    let cancelled = false;
    const setupWorker = async () => {
      try {
        const res = await fetch('/pdf.worker.min.js', { method: 'HEAD' });
        const hasLocal = res.ok;
        pdfjs.GlobalWorkerOptions.workerSrc = hasLocal
          ? '/pdf.worker.min.js'
          : 'https://unpkg.com/pdfjs-dist@4.6.82/build/pdf.worker.min.js';
      } catch {
        pdfjs.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@4.6.82/build/pdf.worker.min.js';
      } finally {
        if (!cancelled) setWorkerReady(true);
      }
    };
    setupWorker();
    return () => { cancelled = true; };
  }, []);

  const onDocumentLoadSuccess = useCallback((info: { numPages: number }) => {
    setNumPages(info.numPages);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((e: unknown) => {
    setError('Impossibile caricare il PDF.');
    // eslint-disable-next-line no-console
    console.error(e);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      const el = containerRef.current;
      if (!el) return;
      const w = Math.min(1200, el.clientWidth);
      setPageWidth(w);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div ref={containerRef} className="bg-neutral-100 rounded-lg p-4 overflow-auto">
      {!workerReady ? (
        <div>Caricamento visualizzatore…</div>
      ) : error ? (
        <div className="w-full h-[75vh]">
          <iframe title="PDF" src={encodeURI(url)} className="w-full h-full rounded" />
        </div>
      ) : (
        <Document
          file={encodeURI(url)}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<div>Caricamento…</div>}
        >
          {Array.from({ length: numPages }, (_, i) => i + 1).map((p) => (
            <div key={p} className="mb-6 last:mb-0">
              <Page pageNumber={p} width={pageWidth} renderTextLayer={false} renderAnnotationLayer={false} />
            </div>
          ))}
        </Document>
      )}
    </div>
  );
};

export default PdfFlipbook;


