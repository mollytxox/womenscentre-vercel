import Navbar from '../Navbar'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"

describe('Navbar', () => {
    it('renders the links in order from the logo (home), about us, what we offer, get in touch, donate',
        () => {
            render(
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            )
            // check the rendered navbar for the links 
            const links = document.querySelectorAll("a");
            // check our a tags from the array 
            expect(links[0].getAttribute('href')).toBe("/")
            expect(links[1].getAttribute('href')).toBe("/donate")
            expect(links[2].getAttribute('href')).toBe("/aboutus")
            expect(links[3].getAttribute('href')).toBe("/whatweoffer")
            expect(links[4].getAttribute('href')).toBe("/getintouch")
            expect(links[5].getAttribute('href')).toBe("/donate")
        })
})