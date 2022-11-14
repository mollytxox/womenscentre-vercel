import { X } from 'react-bootstrap-icons';
import { useState } from 'react'
// import dependencies
import { Link } from "react-router-dom";
import { Search } from "react-bootstrap-icons"

const MobileMenu = ({ closeMethod }) => {
    const [searchString, updateSearch] = useState("")

    return (
        <>
            {/* <button id="close-nav-menu" onClick={closeMethod}>
                <X />
            </button> */}
            <ul id='mobile-menu'>
                <li>
                    <Link onClick={closeMethod} to="/aboutus">About Us</Link>
                </li>
                <li>
                    <Link onClick={closeMethod} to="/whatweoffer">What we offer</Link>
                </li>
                <li>
                    <Link onClick={closeMethod} to="/getintouch">Get in Touch</Link>
                </li>
                <li>
                    <Link onClick={closeMethod} to="/donate">Donate</Link>
                </li>
                <li>
                    <form id="search-form-mobile" onSubmit={event => { event.preventDefault() }}>
                        <input id="search-bar-mobile" type="text" placeholder="Search..." required
                            onChange={(event) => {
                                updateSearch(event.target.value)
                            }} />
                        {searchString !== "" ?
                            <Link to={`/search-results/${searchString}`}>
                                <Search className="mobile-search-icon" onClick={closeMethod} />
                            </Link> :
                            <Search className="mobile-search-icon" onClick={closeMethod} />
                        }

                    </form>
                </li>
            </ul>
        </>
    )
}

export default MobileMenu

