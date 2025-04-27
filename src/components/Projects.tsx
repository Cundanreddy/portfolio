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
  ];
  
export function Projects () {
  return (
    <div>
      <section id="projects">
      <h3 className="text-3xl font-semibold mt-8 mb-4">Featured Projects</h3>
      <div  className="m-10 grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
          
              <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
              <p className="text text-[var(--color-text)]">{project.description}</p>
            
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}
