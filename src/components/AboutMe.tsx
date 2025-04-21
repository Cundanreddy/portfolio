
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";


const skills: string[]=["C","C++","Python","Shell Scripting","Embedded Protocols (CAN, UART, I2C, SPI)","Technical Writing","API Documentation (Docs-as-Code)"];
const projects = [
  {
    title: "DTS on HiFi",
    description: "Ported and optimized DTS audio library for HiFi DSP. Integrated with audio framework and ensured real-time performance.",
  },
  {
    title: "Host Control",
    description: "Designed a Python GUI and UART protocol to enable MCU-to-HiFi communication and testing workflows.",
  },
  {
    title: "Engine Sound Synthesis",
    description: "Developed an Android-based EV simulation app using Pure Data for audio synthesis and CAN signal testing.",
  },
  {
    title: "Rear Speaker Detection",
    description: "Implemented distance and direction algorithms for Raspberry Pi and ADSP 21569 to detect speaker location.",
  },
  {
    title: "Custom WiFi Router Firmware",
    description: "Built OpenWRT firmware, added custom driver support, and optimized performance on embedded wireless platforms.",
  },
];

export default function AboutMe() {
  return (
    <section className="p-6 md:p-10 bg-[var(--color-background)] text-[var(--color-text)]">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="mb-4">
        I'm <strong>Cundaneswara Reddy</strong>, a passionate Embedded & Linux Firmware Engineer with hands-on experience in
        real-time systems, GPU programming with ROCm, and open-source development. I enjoy working on low-level systems
        with C/C++, Python, and kernel-space development.
      </p>

      <div className="flex flex-col items-center justify-center mt-6">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <ul className="columns-3 md:columns-3 gap-2">
                {skills.map((skill, index) => (
                    <li className="text-sm border border-gray-300 rounded-lg p-2 text-[var(--color-text)] break-inside-avoid mb-1" key={index}>{skill}</li>
                ))}
            </ul>
        </div>
        
        <div className="flex flex-col items-center justify-center mt-4">
          <h3 className="text-xl font-semibold mb-2">Socials</h3>
          <div className="flex space-x-4 items-center mt-2">
            <a href="https://github.com/Cundanreddy" target="_blank" rel="noopener noreferrer">
              <FaGithub size={56} />
            </a>
            <a
              href="https://www.linkedin.com/in/cundaneswara-reddy"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaLinkedin size={56} />
            </a>
            <a
              href="https://www.youtube.com/@cundanreddy"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FaYoutube size={56} />
            </a>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Featured Projects</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
          
              <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
              <p className="text-sm text-[var(--color-text)]">{project.description}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}
