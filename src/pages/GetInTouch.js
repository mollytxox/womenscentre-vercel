import ContactInfo from './../components/ContactInfo'

import React, { useEffect } from 'react'

const GetInTouch = () => {
    useEffect(() => {
        document.title = "Get in Touch"
    }, [])
    return (
        <>
            <ContactInfo />

        </>
    )
}

export default GetInTouch;