import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import type { IconType } from "react-icons";
import { profile } from "../data/profile";
import type { ContactLink } from "../data/profile";

const icons: Record<ContactLink["id"], IconType> = {
    linkedin: FaLinkedin,
    github: FaGithub,
    youtube: FaYoutube,
};

export function ContactMe() {
    const size = 100;
  return (
    <div className="flex flex-col items-center m-10 justify-center mt-4">
        <h3 className="text-3xl font-semibold mb-2">Contact me</h3>
        <div className="flex space-x-10 mt-10 space-around mt-2">
        {profile.contactLinks.map((link) => {
            const Icon = icons[link.id];
            return (
                <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                >
                    <Icon size={size} aria-hidden="true" />
                </a>
            );
        })}
        </div>
    </div>
  );
}
