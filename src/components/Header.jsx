import NavTabs from "./NavTabs";

export default function Header() {
  return (
    <>
      <h1>Casey N. Newman</h1>
      <nav>
        <img className="logo" src="src/assets/cn-logo.svg" />
        <NavTabs />
      </nav>
    </>
  );
}