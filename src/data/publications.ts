export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  /** Canonical link (DOI resolver) */
  url: string;
  abstract: string;
  keywords: string;
  /** Related project id in `projects.ts`, if any */
  projectId?: string;
  /** Optional open-access PDF under /public/publications */
  pdfUrl?: string;
}

export const publications: Publication[] = [
  {
    id: 'dryout-aware-correlation',
    title:
      'Dryout-aware empirical correlation for saturated flow-boiling heat transfer in smooth circular micro/mini tubes',
    authors:
      'Paul Onubi Ayegba, Saaket Shrikant Basarkar, Varun Narendra Patil, Rayan Mohammed Abdul Quddus',
    journal: 'International Journal of Heat and Mass Transfer',
    year: 2027,
    doi: '10.1016/j.ijheatmasstransfer.2026.129798',
    url: 'https://doi.org/10.1016/j.ijheatmasstransfer.2026.129798',
    projectId: 'ml-flow-boiling',
    abstract:
      'Dryout-aware empirical correlation for saturated flow boiling in smooth circular micro/mini tubes, built on a curated literature database of 18,833 HTC measurements from 78 sources. Separate branches for micro/mini pre-dryout and dryout-region regimes capture confinement-sensitive pre-dryout behavior and vapor-convection/residual-liquid effects after dryout. Overall MAPE 17.81% (median 13.35%), with 82.58% and 95.25% of points within ±30% and ±50% error bands; improves on Liu–Winterton, Kim–Mudawar, Bertsch, and Sun–Mishima correlations on the same dataset.',
    keywords:
      'saturated flow boiling; heat transfer coefficient; empirical modeling; mini/micro smooth circular tubes; pre-dryout; dryout-region',
  },
  {
    id: 'ml-flow-boiling-htc',
    title:
      'Predicting Heat Transfer Coefficient for Saturated Flow-Boiling in Micro/Mini Tubes using Machine Learning and Annular-Flow Surrogates',
    authors:
      'Paul Onubi Ayegba, Saaket Shrikant Basarkar, Rayan Mohammed Abdul Quddus, Varun Narendra Patil',
    journal: 'International Journal of Thermofluids',
    year: 2026,
    doi: '10.1016/j.ijft.2026.101630',
    url: 'https://doi.org/10.1016/j.ijft.2026.101630',
    projectId: 'ml-flow-boiling',
    pdfUrl: '/publications/ijft-2026-101630.pdf',
    abstract:
      'Two-part machine-learning framework for saturated flow-boiling HTC prediction. Part I: literature database of 20,891 HTC measurements from 83 studies (22 fluids, multiple diameters, materials, and gravity conditions) with physics-informed features; DLNN, SVM, RF, and GBM outperform Kim–Mudawar, with best MAPE/RMSE/R² of 6.4%/0.83 kW/m²K/0.9977 (micro) and 4.3%/0.35 kW/m²K/0.9930 (mini). Part II: chained annular-flow surrogate (image-derived waves → velocity/frequency → interfacial shear → HTC), with boiling-number correction when nucleation intrudes.',
    keywords:
      'saturated flow boiling; heat transfer coefficient; interfacial shear stress; interfacial wave; machine learning; mini/micro smooth circular tubes',
  },
];

export function getPublicationByProjectId(projectId: string): Publication | undefined {
  return publications.find((p) => p.projectId === projectId);
}

export function highlightAuthor(authors: string, name = 'Varun Narendra Patil'): {
  before: string;
  name: string;
  after: string;
} | null {
  const idx = authors.indexOf(name);
  if (idx === -1) return null;
  return {
    before: authors.slice(0, idx),
    name,
    after: authors.slice(idx + name.length),
  };
}
