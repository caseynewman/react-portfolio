import { Link } from "react-router-dom";
import './style.css'

export default function Footer() {
    return (
        <>
            <div className="footer-links">
                <Link to="/">
                    <img className="footer-logo" src="/assets/flowers-accent.svg" alt="Casey Newman" />
                </Link>
                <Link className="icon" to="https://github.com/caseynewman" target='_blank'>
                    <img src="/assets/icons/github-mark.svg" alt="GitHub Profile" />
                </Link>
                <Link className="icon" to="https://www.linkedin.com/in/caseynewman/" target='_blank'>
                    <img src="/assets/icons/linkedin-icon.svg" alt="LinkedIn Profile" />
                </Link>
            </div>
        </>
    );
}