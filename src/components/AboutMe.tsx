


const skills: string[]=["C","C++","Python","Shell Scripting","Embedded Protocols (CAN, UART, I2C, SPI)","API Documentation (Docs-as-Code)"];

export default function AboutMe() {
  return (
    <section id="aboutme"className="p-6 md:p-10 bg-[var(--color-background)] text-[var(--color-text)]">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="mb-4 text-xl">
        This is <strong>Cundan</strong> an Embedded Engineer. I am currently working at 
        <a className="italic" href="https://www.jasmin-infotech.com" target="_blank"> Jasmin Infotech</a>
        . <br/>Please go through this webiste to know me better.
      </p>

      <div className="flex flex-col items-center justify-center mt-6">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <ul className="columns-3 md:columns-3 gap-2">
                {skills.map((skill, index) => (
                    <li className="text border border-gray-300 rounded-lg p-2 text-[var(--color-text)] break-inside-avoid mb-1" key={index}>{skill}</li>
                ))}
            </ul>
        </div>
        

      </div>
      
    </section>
  );
}
