// MenuItems.tsx
import { Link } from "react-router-dom";

export const MenuItems = () => {
  return (
    <>
      <li className="transition-all duration-300 ease-in-out hover:text-[#80d1ff]">
        <Link to='/'>Inicio</Link>
      </li>
      <li className="transition-all duration-300 ease-in-out hover:text-[#80d1ff]">
        <Link to='/'>Sobre mim</Link>
      </li>
      <li className="transition-all duration-300 ease-in-out hover:text-[#80d1ff]">
        <Link to='/'>Habilidades</Link>
      </li>
      <li className="transition-all duration-300 ease-in-out hover:text-[#80d1ff]">
        <Link to='/'>Projetos</Link>
      </li>
    </>
  );
};
