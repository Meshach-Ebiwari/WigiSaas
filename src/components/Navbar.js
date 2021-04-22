import React, {useState} from 'react'

// import {
//     NavContainer, 
//     NavFlex,
//     NavLogo,
//     Img,
//     NavLinkWrap,
//     NavLink
// } from './ComponentElements'
import {
    Navigation, 
    Toggle,
    Hamburger,
    Navbox,
    NavItem,
    LogoWrap,
    LogoImage
} from './ComponentElements'
import {BrowserRouter as Router} from 'react-router-dom'

import logo from '../assets/loggo.png'

// const Navbar = () => {
//     return (
//         <NavContainer>
//             <NavFlex>
//                 <NavLogo to='/'>
//                     <Img src={Logo} />
//                 </NavLogo>
//                 <NavLinkWrap>
//                     <NavLink>Home</NavLink>
//                     <NavLink>About</NavLink>
//                     <NavLink>Contact</NavLink>
//                     <NavLink>Home</NavLink>
//                 </NavLinkWrap>
//             </NavFlex>
//         </NavContainer>
//     )
// }

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <Navigation>
             <LogoWrap to ='/'>
            <LogoImage src={logo} alt="logo" />
        </LogoWrap>
            <Toggle
            navbarOpen={navbarOpen}
            onClick={() => setNavbarOpen(!navbarOpen)}
            >
                {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>
            {navbarOpen ? ( 
            <Navbox>
                <NavbarLink />
            </Navbox>
            ) : (
            <Navbox open>
                <NavbarLink />
            </Navbox>
            )}
        </Navigation>
    )
}
export default Navbar

const NavbarLink = () => {
    return (
        <>
        <Router>
           <NavItem to='/'>Home</NavItem> 
           <NavItem to='/Service'>Features</NavItem> 
           <NavItem to='/gallery'>Pricing</NavItem> 
           <NavItem to='/contact'>Blog</NavItem>
           </Router>
        </>
    )
}