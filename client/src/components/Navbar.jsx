import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex-shrink-0">
            </div>
            <div className="flex items-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/urshil-patel-a899a1192/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/Urshilpatel" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://x.com/urshil_patel" target="_blank" rel="noopener noreferrer">
                    <FaSquareXTwitter />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
