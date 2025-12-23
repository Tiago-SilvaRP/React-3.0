interface HamburguerMenuProps {
  isOpen: boolean;
};

export const HamburguerMenu = ({ isOpen }: HamburguerMenuProps) => {
  return (
    <>
      <span className={`w-full h-0.5 bg-gray-200 rounded-lg transition-all duration-300 ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`} ></span>
      <span className={`w-full h-0.5 bg-gray-200 rounded-lg transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
      <span className={`w-full h-0.5 bg-gray-200 rounded-lg transition-all duration-300 ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
    </>
  )
}