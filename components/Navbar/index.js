import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import {BrowserRouter as Router} from 'react-router-dom';



const Navbar = () => {
    return (
      <>
      <Nav>
          <NavbarContainer>
        <NavLogo to='/'>Tick.io</NavLogo>
        <MobileIcon>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='about'>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='discover'>Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='Servicers'>Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='Ajuda'>Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to="/signin"> Sign In </NavBtnLink>
        </NavBtn>
          </NavbarContainer>
      </Nav>
      </>
    );
};

export default Navbar;
