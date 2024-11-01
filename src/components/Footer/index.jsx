import { Link } from "react-router-dom";
import './style.css'

export default function Footer() {
    return (
        <>
            <div className="footer-links">
                <Link to="/">
                    <img className="footer-logo" src="/assets/cn-header-logo.svg" alt="Casey Newman" />
                </Link>
                <Link className="icon" to="https://github.com/caseynewman">
                    <img src="/assets/icons/github-mark.svg" alt="GitHub Profile" />
                </Link>
                <Link className="icon" to="https://www.linkedin.com/in/caseynewman/">
                    <img src="/assets/icons/linkedin-icon.svg" alt="LinkedIn Profile" />
                </Link>
            </div>
        </>
    );
}