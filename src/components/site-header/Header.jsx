import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <nav>
        <Link to="/">
          <img className="logo" src="public/assets/cn-header-logo.svg" alt="Casey Newman" />
        </Link>
        <Navigation />
      </nav>
    </>
  );
}