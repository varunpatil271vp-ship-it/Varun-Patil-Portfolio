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
}

export const publications: Publication[] = [
  {
    id: 'ml-flow-boiling-htc',
    title:
      'Prediction of Heat Transfer Coefficient for Saturated Flow-Boiling in Micro/Mini Tubes using Machine Learning and Annular-Flow Surrogates',
    authors: 'P.O. Ayegba, S.S. Basarkar, R.M.A. Quddus, Varun Narendra Patil',
    journal: 'International Journal of Thermofluids',
    year: 2026,
    doi: '10.1016/j.ijft.2026.101630',
    url: 'https://doi.org/10.1016/j.ijft.2026.101630',
    projectId: 'ml-flow-boiling',
    abstract:
      'Two-part framework: (I) Literature database of 20,727 HTC measurements from 82 studies (22 fluids, multiple diameters and gravity conditions). Physics-informed dimensionless features; four ML models (DLNN, SVM, RF, GBM) compared to Kim-Mudawar correlation. RF and GBM achieved MAPE ~5%, R²~0.99. Grouped feature importance identified reduced pressure, heat-flux forcing, inertia, and two-phase structure as dominant drivers. Stepwise empirical benchmark derived for interpretability. (II) Chained annular-flow surrogate: image-derived features → wave velocity/frequency → interfacial shear → HTC, with boiling-number correction when nucleation intrudes; MAPE as low as 3%, R² up to 0.98.',
    keywords:
      'flow boiling; heat transfer coefficient; machine learning; SVM; gradient boosting; annular flow; mini/micro-channels',
  },
];

export function getPublicationByProjectId(projectId: string): Publication | undefined {
  return publications.find((p) => p.projectId === projectId);
}
