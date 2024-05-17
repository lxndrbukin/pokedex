import "./assets/styles.scss";
import { IoSearch } from "react-icons/io5";

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <img
        src="https://crisgon.github.io/pokedex/src/images/logo.png"
        alt="Pokedex"
        className="header-logo"
      />
      <form className="header-search">
        <input placeholder="Search..." />
        <button>
          <IoSearch />
        </button>
      </form>
    </header>
  );
}
