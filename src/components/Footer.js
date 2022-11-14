import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer-links-box">
                <p className="footer-link"><Link to="/">Home</Link></p>
                <p className="footer-link"><Link to="/aboutus">About Us</Link></p>
                <p className="footer-link"><Link to="/">What we offer</Link></p>
                <p className="footer-link"><Link to="/">Get in Touch</Link></p>
                <p className="footer-link"><Link className="footer-donate" to="/donate">Donate</Link></p>
            </div>
            <div className="footer-logo-box">
                <div className="logo-container">
                    <img className="footer-logo" src="/img/footerlogo.png" />
                </div>
                <div className="facebook-container">
                    <a href="https://www.facebook.com/WomensCentreChch/">
                        <img className="facebook-logo" src="/img/facebooklogo.png" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer