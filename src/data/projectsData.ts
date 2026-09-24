export interface Project {
  id: string;
  title: string;
  description: string;
  thumbUrl: string;
  imageUrls: string[];
  pdfUrls?: string[];
  pdfUrl?: string;
}

export const projects: Project[] = [];

const am: Project = {
  id: "am",
  title: "AM",
  description: "Materiale PDF per il cliente AM.",
  thumbUrl: "/LoghiLavori/Logo_AM.png",
  imageUrls: [
    "/scorrimento_immagini/am/am1.png",
    "/scorrimento_immagini/am/am2.png",
    "/scorrimento_immagini/am/am3.png"
  ],
  pdfUrl: "/PDF/AM_01_2026.pdf"
};

const bimarket: Project = {
  id: "bimarket",
  title: "Bimarket",
  description: "Materiale PDF per Bimarket.",
  thumbUrl: "/LoghiLavori/Logo_Bimarket.png",
  imageUrls: [
    "/scorrimento_immagini/bimarket/Bimarket 2025_17_Pagina_1.png",
    "/scorrimento_immagini/bimarket/Bimarket 2025_17_Pagina_2.png",
    "/scorrimento_immagini/bimarket/Bimarket 2025_17_Pagina_3.png"
  ],
  pdfUrl: "/PDF/Bimarket 2025_17.pdf"
};

const bitar: Project = {
  id: "bitar",
  title: "Bitar",
  description: "Materiale PDF per Bitar.",
  thumbUrl: "/LoghiLavori/Logo_Bitar.png",
  imageUrls: [
    "/scorrimento_immagini/bitar/BITAR_COMPLETO_Pagina_1.png",
    "/scorrimento_immagini/bitar/BITAR_COMPLETO_Pagina_2.png",
    "/scorrimento_immagini/bitar/BITAR_COMPLETO_Pagina_3.png"
  ],
  pdfUrl: "/PDF/BITAR_COMPLETO.pdf"
};

const delizie: Project = {
  id: "le-delizie-del-sud",
  title: "Le Delizie Del Sud",
  description: "Materiale promozionale integrato: CANVASS, Progetto Pulito, PET FOOD e Supermercati accorpati per il brand Le delizie del sud.",
  thumbUrl: "/LoghiLavori/Logo_Delizie.png",
  imageUrls: [
    "/scorrimento_immagini/delizie/2026_05_SPECIALI_Pagina_1.png",
    "/scorrimento_immagini/delizie/2026_05_SPECIALI_Pagina_2.png",
    "/scorrimento_immagini/delizie/2026_05_SPECIALI_Pagina_3.png"
  ],
  pdfUrls: [
    "/PDF/CANVASS_2026_01_BASSA.pdf",
    "/PDF/NO FOOD_2026_01.pdf",
    "/PDF/PET FOOD_01_2026.pdf",
    "/PDF/ledelizie_Supermercati_27_2025.pdf"
  ]
};

const merini: Project = {
  id: "merini-overline",
  title: "Merini Overline",
  description: "Catalogo completo Merini Overline: Linea Consumer, Linea Professional Altri Prodotti, Linea Professional Shampoo e Mockup Overline Academy.",
  thumbUrl: "/LoghiLavori/Logo_Merini.png",
  imageUrls: [
    "/scorrimento_immagini/merini/MERINI_LINEA_CONSUMER_Pagina_1.png",
    "/scorrimento_immagini/merini/MERINI_LINEA_CONSUMER_Pagina_2.png",
    "/scorrimento_immagini/merini/MERINI_LINEA_CONSUMER_Pagina_3.png"
  ],
  pdfUrls: [
    "/PDF/MERINI_LINEA_CONSUMER.pdf",
    "/PDF/MERINI_LINEA_PROFESSIONAL_ALTRI_PRODOTTI.pdf",
    "/PDF/MERINI_LINEA_PROFESSIONAL_SHAMPOO.pdf",
    "/PDF/MERINI_MOCKUP_OVERLINE_ACADEMY.pdf"
  ]
};

const diBlasio: Project = {
  id: "di-blasio",
  title: "Di Blasio",
  description: "Materiale PDF per Di Blasio.",
  thumbUrl: "/LoghiLavori/Logo_DiBlasio.png",
  imageUrls: [
    "/scorrimento_immagini/diblasio/DI_BLASIO_2026_01_Pagina_1.png",
    "/scorrimento_immagini/diblasio/DI_BLASIO_2026_01_Pagina_2.png",
    "/scorrimento_immagini/diblasio/DI_BLASIO_2026_01_Pagina_3.png"
  ],
  pdfUrl: "/PDF/DI_BLASIO_2026_01.pdf"
};

const drowssap: Project = {
  id: "drowssap",
  title: "Drowssap",
  description: "Materiale PDF per Drowssap.",
  thumbUrl: "/LoghiLavori/Logo_Drowssap.png",
  imageUrls: [
    "/scorrimento_immagini/drowssap/DROWSSAP_Brochure60x20_REV03_bozza_Pagina_1.png",
    "/scorrimento_immagini/drowssap/DROWSSAP_Brochure60x20_REV03_bozza_Pagina_2.png"
  ],
  pdfUrl: "/PDF/DROWSSAP_Brochure60x20_REV03_bozza.pdf"
};

const frescohouse: Project = {
  id: "frescohouse",
  title: "FrescoHouse",
  description: "Materiale PDF per FrescoHouse.",
  thumbUrl: "/LoghiLavori/Logo_FrescoHouse.png",
  imageUrls: [
    "/scorrimento_immagini/frescohouse/IPERFRESCO_2026_12_Pagina_1.png",
    "/scorrimento_immagini/frescohouse/IPERFRESCO_2026_12_Pagina_2.png",
    "/scorrimento_immagini/frescohouse/IPERFRESCO_2026_12_Pagina_3.png"
  ],
  pdfUrl: "/PDF/IPERFRESCO_2026_01.pdf"
};

const litiberi: Project = {
  id: "litiberi",
  title: "Litiberi",
  description: "Entrambi i lavori per Litiberi.",
  thumbUrl: "/LoghiLavori/Logo_Litiberi.png",
  imageUrls: [
    "/scorrimento_immagini/litiberi/LITIBERI_Manifesto 70x100.png"
  ],
  pdfUrls: [
    "/PDF/LITIBERI_6x3 litiberi.pdf",
    "/PDF/LITIBERI_Manifesto 70x100.pdf"
  ]
};

const pac: Project = {
  id: "pac",
  title: "PAC",
  description: "Materiale PDF per PAC.",
  thumbUrl: "/LoghiLavori/Logo_Pac.png",
  imageUrls: [
    "/scorrimento_immagini/pac/PAC CASH_2026_01__Pagina_1.png",
    "/scorrimento_immagini/pac/PAC CASH_2026_01__Pagina_2.png",
    "/scorrimento_immagini/pac/PAC CASH_2026_01__Pagina_3.png"
  ],
  pdfUrl: "/PDF/PAC CASH_2026_01_.pdf"
};

const resource: Project = {
  id: "resourceconsulting",
  title: "ResourceConsulting",
  description: "Materiale PDF per ResourceConsulting.",
  thumbUrl: "/LoghiLavori/Logo_Resource.png",
  imageUrls: [
    "/scorrimento_immagini/resource/Pagine da ResourceConsulting_Catalogo.pdf_Pagina_1.png",
    "/scorrimento_immagini/resource/Pagine da ResourceConsulting_Catalogo.pdf_Pagina_2.png",
    "/scorrimento_immagini/resource/Pagine da ResourceConsulting_Catalogo.pdf_Pagina_3.png",
    "/scorrimento_immagini/resource/Pagine da ResourceConsulting_Catalogo.pdf_Pagina_4.png"
  ],
  pdfUrl: "/PDF/ResourceConsulting_Catalogo.pdf"
};

const madeInRome: Project = {
  id: "made-in-rome",
  title: "Made In Rome",
  description: "Catalogo PDF per il cliente Made In Rome.",
  thumbUrl: "/images/loghilavori/Logo_MadeInRome.png",
  imageUrls: [
    "/scorrimento_immagini/madeinrome/MadeInRome_Tours_Catalogue_Complete_DoublePage_Preview_Pagina_1.png",
    "/scorrimento_immagini/madeinrome/MadeInRome_Tours_Catalogue_Complete_DoublePage_Preview_Pagina_2.png",
    "/scorrimento_immagini/madeinrome/MadeInRome_Tours_Catalogue_Complete_DoublePage_Preview_Pagina_3.png"
  ],
  pdfUrl: "/PDF/MadeInRome_Tours_Catalogue_Complete_DoublePage_Preview.pdf"
};

const villaBelvedere: Project = {
  id: "villa-belvedere",
  title: "Villa Belvedere",
  description: "Rappresentazione fotografica e grafica del progetto Villa Belvedere.",
  thumbUrl: "/images/villabelvedere01.png",
  imageUrls: [
    "/images/villabelvedere02.png",
    "/images/villabelvedere03.png",
    "/images/villabelvedere04.png",
    "/images/villabelvedere05.png",
    "/images/villabelvedere06.png"
  ]
};

const negozietto: Project = {
  id: "il-negozietto",
  title: "Il Negozietto",
  description: "Materiale PDF per Il Negozietto.",
  thumbUrl: "/LoghiLavori/Logo_IlNegozietto.png",
  imageUrls: [
    "/scorrimento_immagini/ilnegozietto/IL NEGOZIETTO_05_2026_Pagina_1.png",
    "/scorrimento_immagini/ilnegozietto/IL NEGOZIETTO_05_2026_Pagina_2.png"
  ],
  pdfUrl: "/PDF/IL NEGOZIETTO_05_2026.pdf"
};

const fortuna: Project = {
  id: "fortuna-srls",
  title: "Fortuna SRLS",
  description: "Sito web per la Fortuna SRLS.",
  thumbUrl: "/LoghiLavori/Logo_fortunaedilizia.svg",
  imageUrls: [
    "/scorrimento_immagini/fortuna/Screenshot 2026-06-15 alle 15.35.09.png",
    "/scorrimento_immagini/fortuna/Screenshot 2026-06-15 alle 15.35.24.png",
    "/scorrimento_immagini/fortuna/Screenshot 2026-06-15 alle 15.35.30.png",
    "/scorrimento_immagini/fortuna/Screenshot 2026-06-15 alle 15.35.37.png"
  ]
};

const industriaGraficaSimeoni: Project = {
  id: "industria-grafica-simeoni",
  title: "Industria Grafica Simeoni",
  description: "Materiale grafico per Industria Grafica Simeoni.",
  thumbUrl: "/LoghiLavori/Logo_IndustriaGraficaSimeoni.webp",
  imageUrls: [
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.34.jpeg",
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.34 (1).jpeg",
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.35.jpeg",
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.35 (1).jpeg",
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.35 (2).jpeg",
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.35 (3).jpeg",
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.35 (4).jpeg",
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.36.jpeg",
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.36 (1).jpeg",
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.36 (2).jpeg",
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.36 (3).jpeg",
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.36 (4).jpeg",
    "/industria_grafica_simeoni/WhatsApp Image 2026-05-06 at 00.30.36 (5).jpeg"
  ]
};

export const allProjects: Project[] = [
  delizie,
  bitar,
  bimarket,
  am,
  pac,
  diBlasio,
  drowssap,
  frescohouse,
  litiberi,
  merini,
  resource,
  madeInRome,
  villaBelvedere,
  negozietto,
  industriaGraficaSimeoni,
  fortuna
];
