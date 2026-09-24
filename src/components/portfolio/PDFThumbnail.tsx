import { useEffect, useRef, useState } from "react";

interface PDFThumbnailProps {
  pdfUrl: string;
  title: string;
  licenseKey?: string;
  thumbUrl?: string;
  onClick?: () => void;
}

const PDFThumbnail: React.FC<PDFThumbnailProps> = ({ pdfUrl, title, licenseKey, thumbUrl, onClick }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const generateThumbnail = async () => {
      if (!canvasRef.current) return;

      try {
        console.log(`Generazione thumbnail per: ${pdfUrl}`);
        
        // Prova prima con PDF.js globale
        let pdfjsLib = (window as any).pdfjsLib || (window as any).PDFJS;
        
        if (!pdfjsLib) {
          console.log("PDF.js non disponibile, uso fallback");
          setError(true);
          setLoading(false);
          return;
        }

        console.log("PDF.js disponibile");

        // Configura PDF.js
        if (pdfjsLib.GlobalWorkerOptions) {
          pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
        }

        console.log("Caricamento PDF...");
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        
        console.log(`PDF caricato, pagine: ${pdf.numPages}`);
        const page = await pdf.getPage(1);
        
        console.log("Rendering della prima pagina...");
        const viewport = page.getViewport({ scale: 0.3 });
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        if (!context) {
          setError(true);
          setLoading(false);
          return;
        }

        // Dimensioni del contenitore più grandi (140px x 180px)
        const containerWidth = 140;
        const containerHeight = 180;
        
        // Calcola la scala per adattarsi al contenitore
        const scaleX = containerWidth / viewport.width;
        const scaleY = containerHeight / viewport.height;
        const scale = Math.min(scaleX, scaleY);
        
        canvas.width = containerWidth;
        canvas.height = containerHeight;
        
        // Centra il contenuto
        const scaledWidth = viewport.width * scale;
        const scaledHeight = viewport.height * scale;
        const offsetX = (containerWidth - scaledWidth) / 2;
        const offsetY = (containerHeight - scaledHeight) / 2;
        
        // Renderizza
        const renderContext = {
          canvasContext: context,
          viewport: page.getViewport({ scale: scale }),
          transform: [1, 0, 0, 1, offsetX, offsetY]
        };
        
        await page.render(renderContext).promise;
        
        console.log("Thumbnail generata con successo!");
        setLoading(false);
        
      } catch (err) {
        console.error("Errore nella generazione della thumbnail:", err);
        setError(true);
        setLoading(false);
      }
    };

    generateThumbnail();
  }, [pdfUrl]);

  return (
    <div 
      className="cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white" style={{ width: '140px', height: '180px' }}>
        <div className="flex items-center justify-center w-full h-full">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-500"></div>
            </div>
          ) : error ? (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-center p-2">
                <div className="text-4xl mb-2">📄</div>
                <div className="text-xs text-blue-600 font-medium">PDF</div>
                <div className="text-xs text-blue-500">Clicca</div>
              </div>
            </div>
          ) : (
            <canvas 
              ref={canvasRef}
              className="w-full h-full object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          )}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white p-2 shadow-lg">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-center" style={{ width: '140px' }}>
        <h3 className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default PDFThumbnail;
