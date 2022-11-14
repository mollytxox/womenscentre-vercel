import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div id="hero">
                <img className="hero-background-image" src="/img/hero.png" />
            </div>
            <div className="white-section">
                <div className="whitetext-box">
                    <h1 className="welcome-title">Welcome to The Women’s Centre</h1>
                    <p className="welcome-body-text">
                        We have been operating since 1986 providing a wealth of information and services to women in a safe, supportive and affirming environment. We work for the well-being of women by assisting, supporting and encouraging them to make informed decisions. The Centre is committed to the Te Tiriti o Waitangi.
                    </p>
                    <Link to="/aboutus"><button className="findoutmore-button">Find out more</button></Link>
                </div>
                <div className="whiteimage-box">
                    <img className="empower-women-image" src="/img/empoverwomen.png" />
                </div>
            </div>
        </>
    )
}

export default Hero