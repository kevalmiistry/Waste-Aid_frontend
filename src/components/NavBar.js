import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PostContext from '../Context/Posts/PostContext'
import logo from '../images/waste-aid-logo-1.png'

const NavBar = () => {
    const context = useContext(PostContext)
    const { LogOutFunc } = context

    const nevigate = useNavigate()

    const location = useLocation()
    const LinkStyle = { textDecoration: 'none', width: 'fit-content' }
    const [mobileMenu, setMobileMenu] = useState('CLOSED')

    const showNav = () => {
        if (mobileMenu === 'CLOSED') {
            document.querySelector('.ul__menu').style.transform = 'translateX(0%)'
            setMobileMenu('OPENED')
        } else if (mobileMenu === 'OPENED') {
            document.querySelector('.ul__menu').style.transform = 'translateX(100%)'
            setMobileMenu('CLOSED')
        }
    }

    const LogOut = () => {
        LogOutFunc()
        nevigate('./login')
    }

    return (
        <>
            <section className='main__nav'>
                <i className="fas fa-bars fa-2x menu__icon" onClick={showNav}></i>
                <img className='navbar__logo' src={logo} alt="waste aid logo" srcSet="" />
                <nav className='navbar'>
                    <ul className='ul__menu'>
                        {
                            (!localStorage.getItem('Waste_Aid_authtoken')) &&
                            <>
                                <Link style={LinkStyle} to='/' ><li className={(location.pathname === '/') ? 'active' : ''} >Home</li></Link>
                                <Link style={LinkStyle} to='/contact' ><li className={(location.pathname === '/contact') ? 'active' : ''}>Contact</li></Link>
                                <li>About</li>
                            </>
                        }
                        {
                            (localStorage.getItem('Waste_Aid_authtoken')) &&
                            <>
                                <Link style={LinkStyle} to='/' ><li className={(location.pathname === '/') ? 'active' : ''} >Home</li></Link>
                                <Link style={LinkStyle} to='/contact' ><li className={(location.pathname === '/contact') ? 'active' : ''}>Contact</li></Link>
                                <Link style={LinkStyle} to='/aidman' ><li className={(location.pathname === '/aidman') ? 'active' : ''}>Aid-man</li></Link>
                                <li>About</li>
                                <li onClick={LogOut}>Logout</li>
                            </>
                        }
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default NavBar