import './style.css';
import { Link } from 'react-router-dom';

export default function MyButton({ children, href, to, ...props }) {
    if (to) {
        return (
            <Link className='my-button' to={to} {...props}>
                {children}
            </Link>
        );
    }
    if (href) {
        return (
            <a className="my-button" href={href} {...props}>
                {children}
            </a>
        );
    }
    return (
        <button
            className="my-button" type="button" {...props}>
            {children}
        </button>
    );
}