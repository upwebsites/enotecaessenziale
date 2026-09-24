import { useEffect, useRef, useState } from "react";

interface DearFlipViewerProps {
  pdfUrl: string;
  licenseKey?: string;
  showIcons?: boolean;
}

const DearFlipViewer: React.FC<DearFlipViewerProps> = ({ pdfUrl, licenseKey, showIcons = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<string>("Caricamento...");
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const initFlipbook = () => {
      if (!ref.current) return;

      // Aspetta che gli script siano completamente caricati
      let retryCount = 0;
      const maxRetries = 10;
      
      const tryInit = () => {
        // Controlla se DFLIP è disponibile
        if (typeof window !== 'undefined' && window.DFLIP) {
          try {
            // Usa openBase64 che funziona
            console.log("DearFlip disponibile, inizializzo...");
            fetch(pdfUrl)
              .then(response => {
                if (!response.ok) {
                  throw new Error(`HTTP ${response.status}`);
                }
                return response.blob();
              })
              .then(blob => {
                const reader = new FileReader();
                reader.onload = function() {
                  const base64 = reader.result.split(',')[1];
                  const config = {
                    licenseKey: licenseKey || "sk_vzsTC&B*#5mKQ6Gc*lV+CEKXe:VJ1",
                    webgl: false,
                    autoEnableOutline: false,
                    autoEnableThumbnail: false,
                    enableDownload: false,
                    enablePrint: false,
                    backgroundColor: "#ffffff",
                    showToolbar: showIcons,
                    showThumbnail: showIcons,
                    showOutline: showIcons,
                    enableAnnotation: false,
                    enableAutoLinks: false
                  };
                  console.log("Config:", config);
                  window.DFLIP.openBase64(base64, config, ref.current);
                  console.log("DearFlip inizializzato con successo");
                  setStatus("Flipbook caricato");
                  
                  // Controlla se funziona
                  setTimeout(() => {
                    if (ref.current && ref.current.children.length > 0) {
                      console.log("Flipbook funziona!");
                      setStatus("Pronto");
                    } else {
                      console.log("Flipbook vuoto, mostro fallback");
                      setShowFallback(true);
                      setStatus("Fallback PDF");
                    }
                  }, 3000);
                };
                reader.readAsDataURL(blob);
              })
              .catch(err => {
                console.error("Errore nel caricamento PDF:", err);
                setStatus("Errore: PDF non caricabile");
                setShowFallback(true);
              });
          } catch (error) {
            console.error("Errore DearFlip:", error);
            setStatus("Errore inizializzazione");
            setShowFallback(true);
          }
        } else {
          // Retry se DFLIP non è ancora caricato
          if (retryCount < maxRetries) {
            retryCount++;
            console.log(`DearFlip non disponibile, retry ${retryCount}/${maxRetries}`);
            setTimeout(tryInit, 300);
          } else {
            console.error("DearFlip non caricato dopo", maxRetries, "tentativi");
            setStatus("DearFlip non disponibile - Usando viewer PDF");
            setShowFallback(true);
          }
        }
      };

      tryInit();
    };

    // Aspetta che il DOM sia pronto
    const timer = setTimeout(initFlipbook, 1000);
    
    return () => clearTimeout(timer);
  }, [pdfUrl, licenseKey, showIcons]);

  return (
    <div style={{ width: "100%", minHeight: 400, margin: "0 auto" }}>
      {!showFallback ? (
        <>
          <div
            ref={ref}
            className="dflip-book"
            style={{ width: "100%", minHeight: 350 }}
          />
          <div style={{ marginTop: "10px", fontSize: "12px", color: "#666" }}>
            {status}
          </div>
        </>
      ) : (
        <div style={{ width: "100%", height: "600px", border: "1px solid #ccc" }}>
          <iframe 
            title="PDF Viewer" 
            src={pdfUrl} 
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      )}
    </div>
  );
};

export default DearFlipViewer;
