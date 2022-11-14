import Offers from './../components/Offers'


import React, { useEffect } from 'react'

const WhatWeOffer = () => {
    useEffect(() => {
        document.title = "What we offer"
    }, [])
    return (
        <>
            <Offers />
        </>
    )
}

export default WhatWeOffer;