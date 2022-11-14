import News from './../components/News'

import React, { useEffect } from 'react'

const AboutUs = () => {
    useEffect(() => {
        document.title = "About Us"
    }, [])
    return (
        <>
            <div id="artist-message">
            </div>
            <News />
        </>
    )
}

export default AboutUs;