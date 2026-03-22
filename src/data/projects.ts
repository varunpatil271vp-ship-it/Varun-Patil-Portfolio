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
}

/** Ongoing first, then completed projects from newest to oldest. */
export const projects: Project[] = [
  {
    id: 'ev-btms-pcm',
    title: 'Passive EV Battery Thermal Management System (PCM + Two-Phase Thermosyphon)',
    category: 'Thermal Systems',
    shortSummary: 'Thesis project: buoyancy-driven two-phase loop integrated with nano-enhanced PCM for passive thermal regulation of EV battery modules. Pump-free heat removal using self-driven coolant.',
    tools: ['ANSYS Fluent', 'SolidWorks', 'CFD/VOF', 'PCM characterization', 'Lab instrumentation'],
    outcome: 'In progress. Target: pack temps below ~45°C under 3-5C discharge, ΔT < 5°C, no external pumping.',
    image: '/images/ev-btms-thermosyphon.png',
    period: 'Aug 2025 - Present',
  },
  {
    id: 'ml-flow-boiling',
    title: 'ML Prediction of Flow-Boiling Heat Transfer Coefficient (Micro/Mini Tubes)',
    category: 'Experimental Research',
    shortSummary: 'Two-part ML framework: (I) literature-scale HTC prediction with physics-informed features; (II) chained annular-flow surrogate (image → wave → shear → HTC). Co-authored manuscript.',
    tools: ['MATLAB', 'ML (RF, GBM, SVM, DLNN)', 'CoolProp', 'Data mining'],
    outcome: 'MAPE ~5%, R²~0.99 vs Kim-Mudawar benchmark; annular-flow surrogate MAPE 3-6%, R² up to 0.98.',
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
    period: 'Ongoing research',
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
