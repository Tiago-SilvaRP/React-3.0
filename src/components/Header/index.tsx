import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { HamburguerMenu } from "../HamburguerMenu";
import { HeaderMenuMobile } from "../HeaderMenu";
import { MenuItems } from "../MenuItems";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const clickedBtnHeader = target.closest('#btn-header');
      const clickedNavMenu = target.closest('#nav-content');

      if (!clickedBtnHeader && !clickedNavMenu) setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 640) setIsOpen(false);
    };

    window.addEventListener('resize', handleSize);
    return () => removeEventListener('resize', handleSize);
  }, []);

  return (
    <header className='relative flex justify-between items-center p-4 bg-[#141b30] text-gray-200'>
      <Link to='/'>
        <h2 className="font-bold">TS</h2>
      </Link>

      <nav>
        <ul className='hidden sm:flex gap-2'>
          <MenuItems />
        </ul>

        {isOpen && <HeaderMenuMobile />}

        <button
          id='btn-header'
          className='flex flex-col justify-center items-center w-6 gap-1.5 cursor-pointer sm:hidden'
          onClick={() => setIsOpen(prev => !prev)}>
          <HamburguerMenu isOpen={isOpen} />
        </button>
      </nav>
    </header >
  )
}