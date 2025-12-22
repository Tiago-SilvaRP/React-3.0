import { useState } from 'react'
import { Link } from 'react-router-dom';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <header className='relative flex justify-between items-center p-4 bg-[#141b30] text-gray-200'>
        <Link to='/' ><h2>TS</h2></Link>

        <nav>
          <ul className='hidden sm:flex gap-2'>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/'>Sobre mim</Link></li>
            <li><Link to='/'>Habilidades</Link></li>
            <li><Link to='/'>Projetos</Link></li>
          </ul>

          {isOpen && (
            <nav className='absolute top-full right-0 flex flex-col bg-[#141b30] p-3 rounded-bl-lg'>
              <ul>
                <li><Link to='/'>Inicio</Link></li>
                <li><Link to='/'>Sobre mim</Link></li>
                <li><Link to='/'>Habilidades</Link></li>
                <li><Link to='/'>Projetos</Link></li>
              </ul>
            </nav>
          )}

          <button 
            className='flex flex-col justify-center items-center w-6 gap-1.5 cursor-pointer sm:hidden'
            onClick={() => setIsOpen(prev => !prev)}>
            <span className={`w-full h-0.5 bg-gray-200 rounded-lg ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`} ></span>
            <span className={`w-full h-0.5 bg-gray-200 rounded-lg ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-200 rounded-lg ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </header >
    </>
  )
}

export default App
