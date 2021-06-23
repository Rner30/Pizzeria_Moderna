import React, { Fragment } from 'react'
import {Bars, Nav, NavIcon, NavLink} from './NavbarElements'

function NavBar({toggle}) {
    return (
        <Fragment>
           <Nav>
              <NavLink to="/">Pizza</NavLink>
              
              <NavIcon onClick={toggle}>
                  <p>Menu</p>
                  <Bars/>
              </NavIcon>
           </Nav>
        </Fragment>
    )
}

export default NavBar
