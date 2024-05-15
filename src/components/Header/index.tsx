import { Navbar, NavbarContent, NavbarItem } from '@nextui-org/react'
import { ReactElement } from 'react'
import ThemeBt from '../Buttons/ThemeBt'
import Logo from '../Logo'

const Header = (): ReactElement => {
  return (
    <Navbar maxWidth="xl" className="bg-transparent">
      <NavbarContent justify="start" className="px-4 xl:px-0">
        <NavbarItem>
          <Logo />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="px-4 xl:px-0">
        <NavbarItem>
          <ThemeBt />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
