import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <nav>
        <img className="logo" src="src/assets/cn-header-logo.svg" alt="Casey Newman"/>
        <Navigation />
      </nav>
    </>
  );
}