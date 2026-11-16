
import { profile } from '../data/profile';
import { experience } from '../data/resume';
import { skillCategories } from '../data/skills';

export default function AboutMe() {
  const currentExperience = experience.find(({ endDate }) => endDate === 'Present');

  return (
    <section id="aboutme" className="p-6 md:p-10 bg-[var(--color-background)] text-[var(--color-text)]">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="mb-4 text-xl">
        This is <strong>{profile.name}</strong>, {profile.title}. {profile.tagline}
      </p>
      {currentExperience && (
        <p className="mb-4">
          Currently working at{' '}
          <a
            className="italic underline"
            href={currentExperience.organizationUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {currentExperience.organization}
          </a>
          .
        </p>
      )}

      <div className="flex flex-col items-center justify-center mt-6">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <ul className="columns-2 md:columns-3 gap-2">
            {skillCategories.flatMap(({ skills }) => skills).map(({ name }) => (
              <li className="border border-gray-300 rounded-lg p-2 text-[var(--color-text)] break-inside-avoid mb-1" key={name}>
                {name}
              </li>
            ))}
            </ul>
        </div>
      </div>
    </section>
  );
}
