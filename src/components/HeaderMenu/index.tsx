import { MenuItems } from "../MenuItems"

export const HeaderMenuMobile = () => {
  return (
    <>
      <nav
        id='nav-content'
        className='absolute top-full right-0 flex flex-col bg-[#141b30] p-3 rounded-bl-lg'>
        <ul>
          <MenuItems />
        </ul>
      </nav>
    </>
  )
}