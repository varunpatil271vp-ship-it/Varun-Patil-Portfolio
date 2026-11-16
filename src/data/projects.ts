export type ProjectCategory = 'Thermal Systems' | 'Optimization & Design' | 'Experimental Research' | 'Manufacturing & Prototyping' | 'Materials / Testing';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortSummary: string;
  tools: string[];
  outcome: string;
  /** Hero / card image */
  image: string;
  /** Optional gallery for project detail "Visuals" section (all images shown in order) */
  gallery?: string[];
  period: string;
  /** DOI or journal page when the work is published */
  publicationUrl?: string;
}

/** Ongoing first, then completed projects from newest to oldest. */
export const projects: Project[] = [
  {
    id: 'ev-btms-pcm',
    title: 'Passive EV Battery Thermal Management System (PCM + Two-Phase Thermosyphon)',
    category: 'Thermal Systems',
    shortSummary:
      'Completed M.S. thesis: experimental and numerical study of PureTemp® 37 PCM, expanded graphite, and a passive two-phase thermosyphon for EV battery-cell thermal management.',
    tools: ['ANSYS Fluent', 'SolidWorks', 'CFD/VOF', 'PCM characterization', 'Lab instrumentation'],
    outcome:
      'Thesis completed (Dec 2026). At ~20.52 W, selected Wall 1 temps at 10,000 s: 44.4 °C (PCM), 43.7 °C (PCM+thermosyphon), 41.0 °C (PCM/EG), 40.5 °C (PCM+EG+thermosyphon). Numerical PCM/EG wraps lowered predicted core temperature vs unwrapped cell.',
    image: '/images/ev-btms-01-prototype.png',
    gallery: [
      '/images/ev-btms-01-prototype.png',
      '/images/ev-btms-02-setup.png',
      '/images/ev-btms-03-setup.png',
      '/images/ev-btms-04-wall-temperature.png',
      '/images/ev-btms-05-puretemp-pcm.png',
      '/images/ev-btms-06-tmc-refrigerant.png',
    ],
    period: 'Aug 2025 - Dec 2026',
  },
  {
    id: 'ml-flow-boiling',
    title: 'ML Prediction of Flow-Boiling Heat Transfer Coefficient (Micro/Mini Tubes)',
    category: 'Experimental Research',
    shortSummary:
      'Two-part ML framework for saturated flow-boiling HTC (literature-scale models + annular-flow surrogates). Published in International Journal of Thermofluids (2026); related dryout-aware correlation in International Journal of Heat and Mass Transfer (2027).',
    tools: ['MATLAB', 'ML (RF, GBM, SVM, DLNN)', 'CoolProp', 'Data mining'],
    outcome:
      'Two peer-reviewed papers (2026–2027). IJFT ML models: best MAPE ~4.3–6.4% with R² ≥ 0.993. IJHMT dryout-aware correlation: overall MAPE 17.81% on 18,833 points.',
    publicationUrl: 'https://doi.org/10.1016/j.ijft.2026.101630',
    image: '/images/ml-flow-boiling-07.png',
    gallery: [
      '/images/ml-flow-boiling-01.png',
      '/images/ml-flow-boiling-02.png',
      '/images/ml-flow-boiling-03.png',
      '/images/ml-flow-boiling-04.png',
      '/images/ml-flow-boiling-05.png',
      '/images/ml-flow-boiling-06.png',
      '/images/ml-flow-boiling-07.png',
    ],
    period: 'Published 2026',
  },
  {
    id: 'scooter-topology',
    title: 'Electric Scooter Topology Optimization',
    category: 'Optimization & Design',
    shortSummary: 'Altair Inspire optimization of three scooter components (fork leg, handlebars, deck). Mass reduction while maintaining design constraints and manufacturability.',
    tools: ['Altair Inspire', 'SolidWorks', 'FEA'],
    outcome: '~40% total mass reduction; fork leg alone 69% weight reduction (3.6 kg → 1.1 kg). Aluminum 6061-T6.',
    image: '/images/scooter-1.png',
    gallery: [
      '/images/scooter-1.png',
      '/images/scooter-2.png',
      '/images/scooter-3.png',
      '/images/scooter-4.png',
    ],
    period: 'Aug 2025 - Dec 2025',
  },
  {
    id: 'pool-flow-boiling',
    title: 'Pool Boiling, Flow Boiling & Multiphase Flow',
    category: 'Experimental Research',
    shortSummary: 'Designed and prototyped high-pressure, high-temperature test sections; supported experiments with high-speed and IR imaging for thermal and flow visualization.',
    tools: ['High-speed imaging', 'IR thermography', 'Test section design', 'Prototyping'],
    outcome: 'Experimental support for multiphase flow and boiling research; visualization and data for validation.',
    image: '/images/pool-flow-boiling-1.png',
    gallery: [
      '/images/pool-flow-boiling-1.png',
      '/images/pool-flow-boiling-2.png',
      '/images/pool-flow-boiling-3.png',
      '/images/pool-flow-boiling-4.png',
    ],
    period: 'May 2025 - Aug 2025',
  },
  {
    id: 'polyurethane-composites',
    title: 'Tensile Strength of Polyurethane Composites for Wearables',
    category: 'Materials / Testing',
    shortSummary: 'Printed 20+ polyurethane samples (varying thickness and DI water ratios); performed stress-strain testing and summarized findings in written documentation.',
    tools: ['3D Printing', 'Tensile testing', 'Data analysis', 'Documentation'],
    outcome: 'Documented stress-strain behavior for different formulations; support for wearables design.',
    image: '/images/polyurethane-tensile-1.png',
    gallery: ['/images/polyurethane-tensile-1.png', '/images/polyurethane-tensile-2.png'],
    period: 'Jan 2025 - May 2025',
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
