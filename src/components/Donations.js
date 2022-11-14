import { useAxios } from "use-axios-client"
import { useState } from 'react';
import { X } from 'react-bootstrap-icons';

// import dependencies
import { Link } from "react-router-dom";

// // grab our endpoint url from our .env.development
const baseUrl = process.env.REACT_APP_WOMENS_CENTRE_WP_API_BASEURL
// console.log(baseUrl)
// http://localhost:8888/womenscentre/wp-json/wp/v2/donation?_embed 
// `http://molly.yoobeestudent.net/wordpress/wp-json/wp/v2/donation?_embed` 
const ModalWindow = ({ closeMethod }) => {
    return (
        <div id="modals-box">
            <div id="modal">
                <button id="close-modal">
                    <X onClick={closeMethod} />
                </button>
                <h2 className="modal-header">If you want to make a donation you can do so by:</h2>
                <p className="modal-content">Coming to the Centre in person and making a cash donation. <br></br>
                    Making a transfer to our bank account. Account number: 38-9006-0580625-00, Account name Women's Centre Inc.<br></br>
                    If you are making an international transfer; the bank is Kiwibank, 155 The Terrace, Private Bag 39 888, Wellington, New Zealand <br></br>
                    - the Swift code for Kiwibank is CITI NZ 2X.</p>
                <p className="modal-content">Thank you for assisting the Women’s Centre to make a real authentic difference in the lives of women, their families and wider communities.</p>
            </div>
        </div>
    )
}

const AllDonations = () => {

    const [modalIsOpen, triggerModal] = useState(false);

    const toggleModal = () => {
        // ! before a boolen value will flip the value like below
        triggerModal(!modalIsOpen);
    }

    const endpoint = baseUrl + "donation?_embed"
    const { data: donatePosts, error, loading } = useAxios({
        url: endpoint
    })

    // check if the news posts have been returned
    if (loading) return (
        <p>Loading...</p>
    )
    if (!donatePosts) return "No options found"
    if (error) return "Error"
    console.log(donatePosts);

    const showdonatePosts = donatePosts.map((donate, index) => {
        return (
            <div className="donate-box" key={index}>
                <div className="donate-box-link">
                    <h3 className="donate-price">{donate.title.rendered}</h3>
                    <div className="donate-box-content" onClick={toggleModal}>
                        <div dangerouslySetInnerHTML={{ __html: donate.content.rendered }} />
                    </div>
                    {modalIsOpen && <ModalWindow closeMethod={toggleModal} />}
                </div>
            </div>
        )
    })
    return showdonatePosts
}


const Donations = () => {
    return (
        <div id="Donations">
            <img className="upside-down-orange-banner" src="/img/upsidedownorangebanner.png" />
            {/* This is the container that holds all the header content  */}
            <div className="donations-header-box">
                <div className="donation-headers">
                    <h1 className="donations-header">Make a Donation!</h1>
                    <h3 className="donations-subheader">Thank you for supporting us.</h3>
                </div>
                <div className="donation-image-box">
                    <img className="donation-image" src="/img/donationimage.png" />
                </div>
            </div> {/* This is the container that holds all the header content  */}
            {/* This is the container that holds the donation posts from Wordpress  */}
            <div id="item-container">
                <AllDonations />
            </div> {/* This is the container that holds the donation posts from Wordpress  */}
            {/* This is the container that holds all the text about donating  */}
            <div className="donating-text-container">
                <div className="more-about-donating">
                    <h1 className="donations-header-pink">More about donating</h1>
                    <p className="donation-body-text">As an  organistation with charity status, we rely on annual grants, donations and paid memberships to keep the Centre running. We are grateful for every donation/grant that the Centre receives whether it be monetary, goods, or services.  <br></br>
                        Your gift will help ensure the continuation of the work we are doing for the women of Christchurch.</p>
                </div>
                <div className="become-a-member">
                    <h1 className="donations-header-orange">Become a member</h1>
                    <p className="donation-body-text">Become a member today and take advantage of the benefits of the Women's Centre membership.  Benefits include:
                        A $5 discount on each Women's Centre course you enrol in.
                        Access to the Women's Centre Library. Books can be taken out for up to 3 weeks.
                        Supporting a not-for-profit organisation that is working with and for women's well being. <br></br>
                        How much does it cost to become a Member?
                        Annual membership is $20 waged or $15 low/unwaged (the year starts at the date of payment).</p>
                </div>
                <div className="howto-become-member">
                    <h1 className="donations-header-pink">How to become a member</h1>
                    <p className="donation-body-text">Come in and see us to fill out a membership form and pay in cash or,
                        pay online into account number 38-9006-0580625-00, account name Women's Centre Inc. <br></br>Also send an e-mail to admin@womenscentre.co.nz identifying your name, address, city postal code, phone numbers, amount of payment, and date and reason for payment, so we can connect the payment to the right person. We will confirm the membership once payment is received in the Women’s Centre account.</p>
                </div>
            </div> {/* This is the container that holds all the text about donating  */}
            <img className="orange-wave-divider3" src="/img/orangewave.png" />
        </div>
    )
}

export default Donations;