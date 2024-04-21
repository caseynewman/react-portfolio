import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="footer-links">
                <Link to="/">
                    <img className="footer-logo" src="src/assets/cn-logo.svg" alt="Casey Newman" />
                </Link>
                <Link className="icon" to="https://github.com/caseynewman">
                    <img src="src/assets/icons/github-mark.svg" alt="GitHub Profile" />
                </Link>
                <Link className="icon" to="https://www.linkedin.com/in/caseynewman/">
                    <img src="src/assets/icons/linkedin-icon.svg" alt="LinkedIn Profile" />
                </Link>
                <Link className="icon" to="https://www.youtube.com/@caseynewmanyoga">
                    <img src="src/assets/icons/youtube-icon.svg" alt="YouTube Channel" />
                </Link>
            </div>
        </>
    );
}