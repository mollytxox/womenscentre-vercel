import axios from 'axios'
import { useState } from 'react'

const formEndpoint = '​http://molly.yoobeestudent.net/wordpress/wp-json/contact-form-7/v1/contact-forms/55/feedback'
// ​http://localhost:8888/womenscentre/wp-json/contact-form-7/v1/contact-forms/55/feedback
const ContactForm = () => {
    // collect inputs and store in state
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    // set up state for our contact form
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = () => {
        // process all our user inputs into an object
        const formData = new FormData();
        formData.append('your-name', name)
        formData.append('your-email', email)
        formData.append('your-number', number)
        formData.append('your-message', message)
        // post our data to contact formm 7 in WP backend
        // use axios to do it, first argument is the endpoint
        // second argument is the form data
        // third argument (headers) tells the server what to expect
        axios.post(formEndpoint, formData, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }).then((response) => {
            console.log(response)
            setSubmitted(true)
        }).catch((error) => {
            console.log(error)
            setError("There was an error, please try again!")
        })
    }

    if (submitted) {
        return (
            <>
                <h3>Thank you!</h3>
                <p>Your message was recieved.</p>
            </>
        )
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <p>Please try again.</p>
            </>
        )
    }
    return (
        <div id="form-container">
            <form method="POST" onSubmit={event => {
                event.preventDefault();
                handleSubmit();
            }}>
                {/* name  */}
                <label forhtml="name">Full Name:</label>
                <input name="name" type="text" required onChange={(event) => {
                    setName(event.target.value)
                }} />
                {/* email  */}
                <label forhtml="email">Email:</label>
                <input name="email" type="email" required onChange={(event) => {
                    setEmail(event.target.value)
                }} />
                {/* phone  */}
                <label forhtml="phone">Phone Number:</label>
                <input name="phone" type="text" required onChange={(event) => {
                    setNumber(event.target.value)
                }} />
                {/* message  */}
                <label forhtml="message">Message:</label>
                <input name="message" type="text" required onChange={(event) => {
                    setMessage(event.target.value)
                }} />

                <button className="form-submit-button">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm