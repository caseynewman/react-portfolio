import './style.css';
import { Link } from 'react-router-dom';

export default function SecondaryButton({ children, href, to, ...props }) {
    if (to) {
        return (
            <Link className='secondary-button' to={to} {...props}>
                {children}
            </Link>
        );
    }
    if (href) {
        return (
            <a className="secondary-button" href={href} {...props}>
                {children}
            </a>
        );
    }
    return (
        <button
            className="secondary-button" type="button" {...props}>
            {children}
        </button>
    );
}