import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./MappaItalia.css";

const SVG_NS = "http://www.w3.org/2000/svg";

export const LINK_REGIONI = {
  VA: "/regioni/varese",
  SM: "/regioni/sondrio",
  "FR-H": "/regioni/friuli-venezia-giulia",
  MT: "/regioni/mantova",
  "IT-65": "/regioni/verona",
  "IT-77": "/regioni/ercolano",
  "IT-78": "/regioni/ravenna",
  "IT-72": "/regioni/teramo",
  "IT-45": "/regioni/asti",
  "IT-36": "/regioni/chieti",
  "IT-62": "/regioni/nuoro",
  "IT-42": "/regioni/barletta-anderaA",
  "IT-25": "/regioni/brindisi",
  "IT-57": "/regioni/bari",
  "IT-67": "/regioni/lecce",
  "IT-21": "/regioni/asti-2",
  "IT-52": "/regioni/caulonia",
  "IT-34": "/regioni/rimini",
  "IT-55": "/regioni/matera",
  "IT-23": "/regioni/brescia",
};

export const REGION_LABEL = {
  VA: "Varese",
  SM: "Sondrio",
  "FR-H": "Friuli-Venezia Giulia",
  MT: "Mantova",
  "IT-65": "Verona",
  "IT-77": "Ercolano",
  "IT-78": "Ravenna",
  "IT-72": "Teramo",
  "IT-45": "Asti",
  "IT-36": "Chieti",
  "IT-62": "Nuoro",
  "IT-42": "Barletta-Anderson",
  "IT-25": "Brindisi",
  "IT-57": "Bari",
  "IT-67": "Lecce",
  "IT-21": "Asti-2",
  "IT-52": "Caulonia",
  "IT-34": "Rimini",
  "IT-55": "Matera",
  "IT-23": "Brescia",
};

export default function MappaItalia() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const fetchSvg = async () => {
      try {
        const res = await fetch("/italy.svg");
        if (!res.ok) throw new Error("SVG non disponibile");
        const text = await res.text();

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "image/svg+xml");
        const svgEl = doc.documentElement;

        // rename id to avoid collisions
        const paths = Array.from(svgEl.querySelectorAll("path[id]"));
        paths.forEach((path) => {
          const id = path.getAttribute("id");
          if (id) {
            path.setAttribute("data-region-id", id);
          }
          path.setAttribute("class", (path.getAttribute("class") || "") + " mappa-italia__geography");
        });

        const imported = document.importNode(svgEl, true);
        const renderedSvg = document.createElementNS(SVG_NS, "svg");
        renderedSvg.setAttribute("className", "mappa-italia__svg");
        renderedSvg.setAttribute("viewBox", "0 0 610.31 792.59");
        renderedSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        renderedSvg.setAttribute("aria-label", "Mappa interattiva delle regioni italiane");
        while (imported.firstChild) {
          renderedSvg.appendChild(imported.firstChild);
        }

        container.appendChild(renderedSvg);

        const renderedPaths = Array.from(renderedSvg.querySelectorAll("path[data-region-id]"));
        renderedPaths.forEach((path) => {
          path.addEventListener("mouseenter", () => {
            const id = path.getAttribute("data-region-id");
            setHoveredId(id);
            const rect = renderedSvg.getBoundingClientRect();
            const pt = new DOMPointReadOnly(
              path.getBoundingClientRect().left + path.getBoundingClientRect().width / 2,
              path.getBoundingClientRect().top
            );
            setTooltipPos({
              x: pt.x - rect.left,
              y: pt.y - rect.top,
            });
          });
          path.addEventListener("mousemove", (e) => {
            const rect = renderedSvg.getBoundingClientRect();
            setTooltipPos({
              x: e.clientX - rect.left,
              y: e.clientY - rect.top,
            });
          });
          path.addEventListener("mouseleave", () => setHoveredId(null));
          path.addEventListener("click", () => {
            const id = path.getAttribute("data-region-id");
            const url = LINK_REGIONI[id];
            if (url) navigate(url);
          });
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchSvg();
  }, [navigate]);

  const tooltipStyle = hoveredId
    ? {
        left: tooltipPos.x,
        top: tooltipPos.y,
        transform: "translate(-50%, calc(-100% - 12px))",
      }
    : undefined;

  return (
    <div className="mappa-italia" ref={containerRef}>
      <div className="mappa-italia__loading">Caricamento mappa…</div>

      {hoveredId && (
        <div
          className="mappa-italia__tooltip"
          style={tooltipStyle}
        >
          {REGION_LABEL[hoveredId] || hoveredId}
        </div>
      )}
    </div>
  );
}
