import Map from './Map'
import ContactForm from './ContactForm';

const ContactInfo = () => {
    return (
        <div>
            <div className="pink-orange-box-container">
                <div className="orange-contact-box">
                    <h1 className="getintouch-header">Get in touch</h1>
                    <p className="getintouch-text">We'd love to hear from you about any issue or maybe you'd like to simply help out with what we do.
                        Either pop in to see us between 10am and 2pm Monday to Fridays, or drop us a line by phone or e-mail.
                        <br></br>
                        All correspondence will be confidential.</p>
                    <img className="store-image" src="/img/centre.png" />
                </div>
                <div className="pink-contact-box">
                    <h1 className="openhours-header">Open hours</h1>
                    <p className="openhours-text">Drop-in opening hours: Monday to Friday 10am - 2pm
                        <br></br>
                        Phone: (03) 371 7414 Monday to Friday between 9am - 4:30pm
                        <br></br>
                        Mobile: 022 105 5308
                        <br></br>
                        Email: support@womenscentre.co.nz
                        <br></br>
                        Street Address:
                        <br></br>
                        <br></br>
                        Unit 3a, 242 Ferry Rd
                        <br></br>
                        Waltham, Christchurch 8011
                        <br></br>
                        Postal Address:
                        <br></br>
                        <br></br>
                        PO Box 10008
                        <br></br>
                        244 Ferry Road, Waltham
                        <br></br>
                        Christchurch 8011</p>
                </div>
            </div>
            <div className="form-map-container">
                <div className="form-container">
                    <h1 className="contactform-header">Contact Us!</h1>
                    <ContactForm />
                </div>
                <Map />
            </div>
        </div>
    )
}

export default ContactInfo;