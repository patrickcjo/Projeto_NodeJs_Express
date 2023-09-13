import { Link } from "react-router-dom";
import { LinkButton } from "./LinkButton";
import { MdStickyNote2 as LogoIcon } from "react-icons/md";
import { FaHome } from "react-icons/fa";

export function AppBar() {
  return (
    <header className="bg-black p-3 shadow-md flex flex-row justify-between">
      <div className="flex flex-row items-center gap-8">
        <Logo />
        <Link
          to="/"
          className="flex text-yellow-400 hover:text-yellow-600 hover:underline font-bold gap-2 justify-center items-center">
          <FaHome className="max-sm:block text-4xl" />
          <span className="hidden md:block ">Página inicial</span>
        </Link>
      </div>
      <div className="flex flex-row items-center gap-8">
        <LinkButton to="/criar-notepad">Criar notepad</LinkButton>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <Link to="/" className="flex flex-row items-center gap-2">
      <LogoIcon className="text-yellow-400 text-4xl" />
      <h1 className="text-lg text-yellow-400 uppercase font-bold">Notepads</h1>
    </Link>
  );
}
