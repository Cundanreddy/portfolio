export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  links: ProjectLink[];
  status: string;
}

export const projects: Project[] = [
  {
    id: 'dts-on-hifi',
    title: 'DTS on HiFi',
    summary:
      'Ported and optimized DTS audio library for HiFi DSP. Integrated with audio framework and ensured real-time performance.',
    tags: [],
    links: [],
    status: 'TODO: Add project status',
  },
  {
    id: 'host-control',
    title: 'Host Control',
    summary:
      'Designed a Python GUI and UART protocol to enable MCU-to-HiFi communication and testing workflows.',
    tags: [],
    links: [],
    status: 'TODO: Add project status',
  },
  {
    id: 'engine-sound-synthesis',
    title: 'Engine Sound Synthesis',
    summary:
      'Developed an Android-based EV simulation app using Pure Data for audio synthesis and CAN signal testing.',
    tags: [],
    links: [],
    status: 'TODO: Add project status',
  },
  {
    id: 'rear-speaker-detection',
    title: 'Rear Speaker Detection',
    summary:
      'Implemented distance and direction algorithms for Raspberry Pi and ADSP 21569 to detect speaker location.',
    tags: [],
    links: [],
    status: 'TODO: Add project status',
  },
  {
    id: 'carcade',
    title: 'Carcade',
    summary:
      'Maps real vehicle control signals to game controller input for driving games.',
    tags: [],
    links: [],
    status: 'TODO: Add project status',
  },
  {
    id: 'convoy-protocol',
    title: 'Convoy Protocol',
    summary:
      'An in-car feature combining group intercom with CAN-bus telemetry relay for vehicle convoys.',
    tags: [],
    links: [],
    status: 'TODO: Add project status',
  },
];
