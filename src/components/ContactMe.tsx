import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export function ContactMe () {
    const size =100;
  return (
    <div className="flex flex-col items-center m-10 justify-center mt-4">
        <h3 className="text-3xl font-semibold mb-2">Contact me</h3>
        <div className="flex space-x-10 mt-10 space-around mt-2">
        
        <a
            href="https://www.linkedin.com/in/cundaneswara-reddy"
            target="_blank"
            rel="noopener noreferrer"
        >
        <FaLinkedin size={size} />
        </a>
        <a href="https://github.com/Cundanreddy" target="_blank" rel="noopener noreferrer">
            <FaGithub size={size} />
        </a>
        <a
            href="https://www.youtube.com/@cundanreddy"
            target="_blank"
            rel="noopener noreferrer"
        >
        <FaYoutube size={size} />
        </a>
        </div>
    </div>
  );
}
