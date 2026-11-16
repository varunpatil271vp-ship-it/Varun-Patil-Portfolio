export const projectDetails: Record<string, {
  problem?: string;
  objective?: string;
  role?: string;
  process?: string;
  learnings?: string;
}> = {
  'ev-btms-pcm': {
    problem: 'EV battery packs require tight thermal control (typically 20-40°C). Conventional BTMSs use pumps or fans, adding parasitic load and complexity.',
    objective:
      'Investigate thermal response of a battery-cell surrogate with PureTemp® 37 PCM, expanded graphite, and a passive two-phase thermosyphon, and compare configurations experimentally and with a transient numerical PCM-wrap study.',
    role: 'M.S. thesis author; design, prototyping, instrumentation, testing, documentation, and numerical study under Dr. Paul O. Ayegba.',
    process:
      'Surrogate tested without PCM and in four cooling configurations (PCM; PCM+EG; PCM+thermosyphon; PCM+EG+thermosyphon). Wall and selected pipe temperatures measured; loop pressure recorded in selected tests. Separate transient numerical study of a prismatic cell with and without PCM-based side wraps.',
    learnings:
      'PCM alone produced a temporary wall-temperature plateau near 44 °C; 5 wt.% EG configurations were ~2–4 °C cooler than PCM alone at comparison times (heat spreading). Pipe-wall temperatures were higher at measured exits than entrances. Two-phase circulation and condenser heat rejection were not confirmed in these measurements; solid-phase PCM retention was not demonstrated.',
  },
  'scooter-topology': {
    problem: 'Electric scooter components can be over-designed; topology optimization can reduce mass while preserving strength and manufacturability.',
    objective: 'Optimize three components (fork leg, handlebars, deck) using Altair Inspire to reduce total mass while maintaining design constraints.',
    role: 'Team member (with David Rodriguez and Patel Heer); responsible for one of the three parts; contributed to design space setup, load definition, and optimization runs.',
    process: 'Assembly selection (EV Iscooter); part assignment (Handle Bar, Deck, Fork Leg); Altair Inspire optimization with defined loads (e.g., 200 lb rider assumption) and supports; material Aluminum 6061-T6; cleanup and export of optimized geometry.',
    learnings: 'Trade-offs between optimization time, software stability, and design cleanup; confinement number and load application in Inspire; exporting and refining topology results for manufacturing.',
  },
  'ml-flow-boiling': {
    problem: 'Flow-boiling heat transfer coefficients are difficult to predict across broad operating conditions; classical correlations lose accuracy on multi-fluid, multi-geometry databases, especially near dryout.',
    objective:
      'Develop physics-informed ML models and annular-flow surrogates for HTC prediction, and a dryout-aware empirical correlation for smooth circular micro/mini tubes.',
    role: 'Co-author on both peer-reviewed papers; contributed to literature database work, feature accounting, and model development with Dr. Ayegba’s group.',
    process:
      'IJFT (2026): literature-scale ML on 20,891 HTC points from 83 studies, plus chained annular-flow surrogate (waves → shear → HTC). IJHMT (2027): dryout-aware closed-form correlation on 18,833 points from 78 sources with separate micro/mini and pre-dryout/dryout-region branches.',
    learnings:
      'Physics-aligned features and flexible ML outperform universal correlations on broad databases; dryout-aware branching improves interpretability and accuracy versus classical operating-variable correlations.',
  },
  'pool-flow-boiling': {
    objective: 'Support design and prototyping of high-pressure, high-temperature test sections and experiments with thermal/flow visualization.',
    role: 'Assisted in design and prototyping; supported experiments with high-speed and IR imaging.',
    process: 'Test section design and fabrication; instrumentation; high-speed and IR imaging for flow and thermal visualization.',
    learnings: 'Multiphase flow visualization and experimental best practices for boiling research.',
  },
  'polyurethane-composites': {
    objective: 'Characterize tensile behavior of polyurethane composites with varying thickness and DI water ratios for wearables applications.',
    role: 'Printed samples, performed stress-strain testing, and documented findings.',
    process: 'Sample preparation (20+ variants); tensile testing; data analysis and written documentation.',
    learnings: 'Impact of formulation and geometry on mechanical properties for wearable composites.',
  },
};
