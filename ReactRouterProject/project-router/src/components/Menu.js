import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <header>
            <div className="header">
                <div className="header-container">
                    <div className="logo">
                        <Link to={'/'}>
                            <img src="img/logo.png" alt="COZYNIBI HOTEL" />
                        </Link>
                    </div>
                    <div className="header-right">
                        <div className="header-top">
                            <div id="touch-open">
                                <span />
                            </div>
                            <div className="form-search">
                                <form action="">
                                    <input type="text" placeholder="Search" />
                                    <button />
                                </form>
                            </div>
                            <div className="language">
                                <div className="lang-active">
                                    <span>English</span>
                                </div>
                                <ul>
                                    <li>
                                        <span>VietNam</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-book">
                                <Link to={'/bookaroom'} style={{textDecoration:'none',color:'#000'}}>Book a room</Link>
                            </div>
                        </div>
                        <div id="sticker">
                            <ul>
                                <li>
                                    <Link to={'/'} className='Link'><span>Home</span></Link>
                                </li>
                                <li >
                                    <Link to={'/aboutus'} className='Link'><span>About Us</span></Link>
                                </li>
                                <li>
                                    <Link to={'/accommodation'} className='Link'><span>Accommodation</span></Link>
                                </li>
                                <li>
                                    <Link to={'/menu'} className='Link'><span>Menu</span></Link>
                                </li>
                                <li>
                                    <Link to={'/tourtravel'} className='Link'><span>Tour travel</span></Link>
                                </li>
                                <li>
                                    <Link to={'/service'} className='Link'><span>Service</span></Link>
                                </li>
                                <li>
                                    <Link to={'/news'} className='Link'><span>News</span></Link>
                                </li>
                                <li>
                                    <Link to={'/gallery'} className='Link'><span>Gallery</span></Link>
                                </li>
                                <li>
                                    <Link to={'/contact'} className='Link'><span>Contact</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Menu