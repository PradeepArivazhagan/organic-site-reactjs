import React from 'react'
import './Header.css';
import logo from './images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faHeart } from '@fortawesome/free-solid-svg-icons'


const Header = () => {

    return (
        <header>
            <nav class="navbar nav-bar-style navbar-expand-lg">
                <div class="container py-4">
                    <a class="navbar-brand" href="#home">
                        <img src={logo} alt="Logo" width="32" height="32" class="d-inline-block align-text-top" /><span className='logo-text'>rganics</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav nav-underline ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#home">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#shop">Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#pages">Pages</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#blog">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <div className='ms-auto'>
                            <a href='#home'><FontAwesomeIcon icon={faHeart} style={{ color: "#114232", }} size="lg" className='me-4' /></a>
                            <a href='#home'><FontAwesomeIcon icon={faShoppingBasket} style={{ color: "#114232", }} size='lg' className='me-4' /></a>
                            <button className='login_btn_style'>Login</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;