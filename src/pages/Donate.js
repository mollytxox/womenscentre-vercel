import Donations from '../components/Donations'

import React, { useEffect } from 'react'

const Donate = () => {
    useEffect(() => {
        document.title = "Donate"
    }, [])
    return (
        <>
            <Donations />
        </>
    )
}

export default Donate;