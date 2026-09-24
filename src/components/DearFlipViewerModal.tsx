import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const LICENSE_KEY = 'sk_vzsTC&B*#5mKQ6Gc*lV+CEKXe:VJ1';

interface DearFlipViewerModalProps {
  onClose: () => void;
  pdfUrl?: string;
}

const DearFlipViewerModal: React.FC<DearFlipViewerModalProps> = ({ onClose, pdfUrl }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const init = async () => {
      // Attendi che DFLIP sia disponibile (gli script globali sono già in index.html)
      const waitForDflip = (ms = 300, max = 20) =>
        new Promise<boolean>((resolve) => {
          let tries = 0;
          const tick = () => {
            tries += 1;
            if (typeof window !== 'undefined' && (window as any).DFLIP) {
              resolve(true);
            } else if (tries >= max) {
              resolve(false);
            } else {
              setTimeout(tick, ms);
            }
          };
          tick();
        });

      const hasDflip = await waitForDflip();
      if (cancelled) return;
      if (!hasDflip) {
        setError('DearFlip non disponibile');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        if (!pdfUrl) { setError('Nessun PDF configurato'); setLoading(false); return; }
        const res = await fetch(pdfUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const blob = await res.blob();
        const base64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const result = reader.result as string;
            resolve(result.split(',')[1] ?? '');
          };
          reader.onerror = () => reject(new Error('FileReader failed'));
          reader.readAsDataURL(blob);
        });

        const config: any = {
          licenseKey: LICENSE_KEY,
          webgl: false,
          autoEnableOutline: false,
          autoEnableThumbnail: false,
          enableDownload: false,
          enablePrint: false,
          backgroundColor: '#ffffff',
          showToolbar: true,
          showThumbnail: false,
          showOutline: false,
          enableAnnotation: false,
          enableAutoLinks: false,
        };

        const el = containerRef.current;
        if (!el) throw new Error('Container not found');
        (window as any).DFLIP.openBase64(base64, config, el);
        setReady(true);
      } catch (e) {
        setError(String(e));
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    init();
    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  // Chiudi con tasto Esc
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [onClose]);

  // Pulizia istanza DFLIP al momento dello smontaggio.
  // Nota: in modalità lightbox DearFlip ri-parenta il wrapper su document.body,
  // quindi va cercato a livello di documento e rimosso manualmente se residuo.
  useEffect(() => {
    return () => {
      try {
        const $ = (window as any).jQuery;
        const apps = document.querySelectorAll('.df-app');
        apps.forEach((a) => {
          const inst = $ ? $(a).data('dfApp') : null;
          if (inst && typeof inst.dispose === 'function') {
            try { inst.dispose(); } catch { /* noop */ }
          }
        });
        // Rimuovi eventuali wrapper lightbox residui e sblocca il body
        document.querySelectorAll('.df-lightbox-wrapper').forEach((w) => w.remove());
        document.body.classList.remove('df-lightbox-open');
      } catch {
        /* noop */
      }
    };
  }, []);

  // Portal su body: il modale non è confinato da overflow/transform dei contenitori (es. sezione con paper-texture)
  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* header chiusura */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white transition z-10"
        aria-label="Chiudi"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div className="w-full max-w-5xl h-[85vh] flex flex-col bg-neutral-100 rounded-lg overflow-hidden shadow-2xl">
        <div className="px-4 py-3 border-b border-neutral-200 flex items-center justify-between bg-neutral-200/50">
          <div className="text-sm text-neutral-700">Visualizzatore PDF — DearFlip</div>
          <div className="text-xs text-neutral-500">
            {loading ? 'Caricamento...' : ready ? 'Pronto' : error ? 'Errore' : '—'}
          </div>
        </div>

        <div className="flex-1 relative bg-white">
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center text-neutral-400 text-sm">
              Caricamento flipbook…
            </div>
          )}
          {error && (
            <div className="absolute inset-0 flex items-center justify-center text-red-600 text-sm">
              {error}
            </div>
          )}
          <div
            ref={containerRef}
            className="dflip-book w-full h-full"
            style={{ minHeight: 0 }}
          />
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DearFlipViewerModal;
