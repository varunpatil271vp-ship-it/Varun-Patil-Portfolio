export const projectDetails: Record<string, {
  problem?: string;
  objective?: string;
  role?: string;
  process?: string;
  learnings?: string;
}> = {
  'ev-btms-pcm': {
    problem: 'EV battery packs require tight thermal control (typically 20-40°C). Conventional BTMSs use pumps or fans, adding parasitic load and complexity.',
    objective: 'Develop and validate a passive, buoyancy-driven two-phase loop with nano-enhanced PCM for pump-free heat removal and stable operating temperatures.',
    role: 'Graduate Research Assistant leading design, prototyping, instrumentation, testing, and documentation; leading a team of 5 undergraduates.',
    process: 'Literature review and refrigerant/PCM selection; loop geometry and fin design with CFD/VOF screening (ANSYS Fluent); PCM enhancement synthesis and property testing; prototype fabrication (loop + PCM + heater); experimental validation and data acquisition; model calibration.',
    learnings: 'Integration of PCM with two-phase thermosyphon for scalable, power-free thermal management; hands-on benchtop fabrication, instrumentation (thermocouples, pressure sensors, IR thermography), and QA practices.',
  },
  'scooter-topology': {
    problem: 'Electric scooter components can be over-designed; topology optimization can reduce mass while preserving strength and manufacturability.',
    objective: 'Optimize three components (fork leg, handlebars, deck) using Altair Inspire to reduce total mass while maintaining design constraints.',
    role: 'Team member (with David Rodriguez and Patel Heer); responsible for one of the three parts; contributed to design space setup, load definition, and optimization runs.',
    process: 'Assembly selection (EV Iscooter); part assignment (Handle Bar, Deck, Fork Leg); Altair Inspire optimization with defined loads (e.g., 200 lb rider assumption) and supports; material Aluminum 6061-T6; cleanup and export of optimized geometry.',
    learnings: 'Trade-offs between optimization time, software stability, and design cleanup; confinement number and load application in Inspire; exporting and refining topology results for manufacturing.',
  },
  'ml-flow-boiling': {
    problem: 'Flow-boiling heat transfer coefficients are difficult to predict across broad operating conditions; classical correlations lose accuracy on multi-fluid, multi-geometry databases.',
    objective: 'Develop a physics-informed ML framework for HTC prediction and an annular-flow surrogate for quasi-real-time estimation from imaging.',
    role: 'Co-author; data mining/screening and feature accounting for the literature database and model development.',
    process: 'Part I: Literature database (20,727 HTC points, 82 studies); physics-informed dimensionless features; training of DLNN, SVM, RF, GBM; benchmark vs Kim-Mudawar; grouped feature importance and stepwise empirical benchmark. Part II: Chained surrogate (image → wave velocity/frequency → interfacial shear → HTC) with boiling-number correction.',
    learnings: 'ML models (RF, GBM) significantly outperform universal correlations when trained on broad data; reduced pressure, heat flux, inertia, and two-phase structure dominate prediction; annular-flow image-based surrogate enables fast HTC estimation.',
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
