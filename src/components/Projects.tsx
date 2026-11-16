import { projects } from '../data/projects';

export function Projects () {
  return (
    <div>
      <section id="projects">
      <h3 className="text-3xl font-semibold mt-8 mb-4">Featured Projects</h3>
      <div  className="m-10 grid md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-300 rounded-lg p-4">
          
              <h4 className="font-semibold text-lg mb-1">{project.title}</h4>
              <p className="text text-[var(--color-text)]">{project.summary}</p>
            
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}
