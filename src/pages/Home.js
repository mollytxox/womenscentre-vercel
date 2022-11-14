import Hero from './../components/Hero'
import Endorsements from './../components/Endorsements'
import Testimonials from './../components/Testimonials'

import React, { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
        document.title = "Home"
    }, [])
    return (
        <>
            <Hero />
            <Testimonials />
            <Endorsements />
            <div id="home">
                <div id="message">
                </div>
            </div>
        </>
    )
}

export default Home