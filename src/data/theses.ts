export interface ThesisEntry {
  id: string;
  kind: 'author' | 'contributor';
  title: string;
  author: string;
  degree: string;
  institution: string;
  year: string;
  chair: string;
  committee?: string[];
  summary: string;
  /** Local PDF under /public when hosting is allowed */
  pdfUrl?: string;
  projectId?: string;
  /** Short note when role is contributor (refine with user) */
  contributionNote?: string;
}

export const theses: ThesisEntry[] = [
  {
    id: 'varun-ev-btms-thesis',
    kind: 'author',
    title:
      'Investigation of Electric-Vehicle Battery Thermal Management Using Phase-Change Material, Expanded Graphite, and a Passive Two-Phase Thermosyphon',
    author: 'Varun Narendra Patil',
    degree: 'M.S. Mechanical Engineering',
    institution: 'California State University, Long Beach',
    year: 'December 2026',
    chair: 'Paul O. Ayegba, Ph.D.',
    committee: ['Laura Sandoval, Ph.D.', 'Jingyi Zeng, Ph.D.'],
    projectId: 'ev-btms-pcm',
    pdfUrl: '/thesis/Varun_Narendra_Patil_Thesis.pdf',
    summary:
      'Experimental and numerical study of an electrically heated battery-cell surrogate cooled with PureTemp® 37 PCM, expanded graphite (EG), and a passive two-phase thermosyphon. Configurations compared include no PCM, PCM alone, PCM+EG, PCM+thermosyphon, and PCM+EG+thermosyphon, with wall/pipe temperatures and selected loop pressures. At ~20.52 W, selected Wall 1 readings at 10,000 s were 44.4 °C (PCM), 43.7 °C (PCM+thermosyphon), 41.0 °C (PCM/EG), and 40.5 °C (all three). A separate transient numerical study of a prismatic cell with PCM-based side wraps predicted lower core temperatures with thin PCM/EG wraps versus the unwrapped case.',
  },
  {
    id: 'rayan-pool-boiling-thesis',
    kind: 'contributor',
    title:
      'Moderate Pressure Pool Boiling on Copper and Experimental Observation of Microlayer Disappearance',
    author: 'Rayan Mohammed Abdul Quddus',
    degree: 'M.S. Aerospace Engineering',
    institution: 'California State University, Long Beach',
    year: 'December 2026',
    chair: 'Paul O. Ayegba, Ph.D.',
    committee: ['Navdeep Singh Dhillon, Ph.D.', 'Jingyi Zeng, Ph.D.'],
    projectId: 'pool-flow-boiling',
    contributionNote:
      'Collaborative lab support on moderate-pressure pool-boiling experiments (diagnostics, setup, and related experimental work). Exact contribution details can be refined.',
    summary:
      'Two related experiments: (1) vertical pool boiling on copper up to 8 bar with high-speed imaging, MATLAB post-processing, and U-Net analysis of bubble dynamics (departure diameter decreases and nucleation site density increases with pressure; boiling curves shift left). (2) Horizontal pool boiling on a sapphire heater to observe microlayer persistence; microlayers generally persisted until ~4.2 bar and narrowed with pressure; beyond ~4.3 bar evaporative heat flux was primarily contact-line driven.',
  },
];
