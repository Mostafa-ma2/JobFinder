import React, { memo } from 'react'
import '../../assets/css/Navbar/navbar.css'
import logo from '../../assets/logo.svg'
import NavbarItemComponent from './NavbarItem/NavbarItemComponent';
import NavbarAuthButtonComponent from './NavbarAuthButton/NavbarAuthButtonComponent';

function NavbarComponent() {
    return (
        <header className='header d-flex container mt-20'>
            <div className='logo w-40'>
                <img src={logo} alt="" className='w-20 mt-10' />
            </div>
            <div className='w-60 d-flex'>
                <NavbarItemComponent />
                <NavbarAuthButtonComponent />
            </div>
        </header>
    )
}


export default NavbarComponent;