import { useState } from 'react'
import { List } from 'react-bootstrap-icons';
import MobileMenu from './MobileMenu'
import { Search } from "react-bootstrap-icons"
// import dependencies
import { Link } from "react-router-dom";

const DropDownNav = ({ closeMethod }) => {
    const [searchString, updateSearch] = useState("")

    return (
        <div className="nav-drop-down">
            <form id="search-form" onSubmit={event => { event.preventDefault() }}>
                <input id="search-bar" type="text" placeholder="Search..." required
                    onChange={(event) => {
                        updateSearch(event.target.value)
                    }} />
                {searchString !== "" ?
                    <Link to={`/search-results/${searchString}`}>
                        <Search onClick={closeMethod} className="desktop-search-icon-clicked" />
                    </Link> :
                    <Search className="desktop-search-icon" />
                }

            </form>
        </div>
    )
}

const Navbar = () => {

    const [searchString, updateSearch] = useState("")

    const [searchDropDownIsOpen, triggerSearchBox] = useState(false);

    const toggleSearchBox = () => {
        // ! before a boolen value will flip the value like below
        triggerSearchBox(!searchDropDownIsOpen);
    }


    // we need to include on and off state in navbar so we can open the navbar/close button
    // declare our menu state and a function to openMenu
    const [menuIsOpen, openMenu] = useState(false);
    // this function toggles the state of openMenu
    const toggleMobileMenu = () => {
        // test open only using true
        // openMenu(true);
        openMenu(!menuIsOpen);
        // toggle no scroll on body
        document.body.classList.toggle('no-scroll');
    };
    return (
        <>
            <div id='topnav'>


                <Link to="/">
                    <div id='logo'>
                        <img src="/img/newlogo.png" />
                    </div>
                </Link>

                <Link to="/donate"><button className="mobile-donate-button">Donate</button></Link>

                {/* Desktop Menu, which only appears on large screens */}
                <ul id='menu'>

                    <li>
                        <Link to="/aboutus">About Us</Link>
                    </li>
                    <li>
                        <Link to="/whatweoffer">What we offer</Link>
                    </li>
                    <li>
                        <Link to="/getintouch">Get in Touch</Link>
                    </li>
                    <li >
                        <Link to="/donate" className="donate-link">Donate</Link>
                    </li>
                    <li className="search-icon" onClick={toggleSearchBox}>
                        <Search />
                    </li>
                    {searchDropDownIsOpen && <DropDownNav closeMethod={toggleSearchBox} />}
                </ul>


                {/* Hamburger icon, only shows up on small screens. */}
                <div id="menu-container">
                    <button id="menu-button" className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                        <List id="hamburger-icon" />
                    </button>
                </div>
            </div>

            {/* If menuIsOpen, show the mobile menu*/}
            {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
        </>
    )
}

export default Navbar
