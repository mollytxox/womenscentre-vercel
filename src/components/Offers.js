import { useAxios } from "use-axios-client"
import AOS from 'aos'
import 'aos/dist/aos.css';

// import dependencies
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_WOMENS_CENTRE_WP_API_BASEURL
// http://localhost:8888/womenscentre/wp-json/wp/v2/offer?_embed 
// `http://molly.yoobeestudent.net/wordpress/wp-json/wp/v2/offer?_embed` 

const AllOffers = () => {
    const endpoint = baseUrl + "offer?_embed"
    const { data: offerPosts, error, loading } = useAxios({
        url: endpoint
    })

    // check if the news posts have been returned
    if (loading) return (
        <p>Loading...</p>
    )
    if (!offerPosts) return "No options found"
    if (error) return "Error"
    console.log(offerPosts);


    const showofferPosts = offerPosts.map((offer, index) => {
        // let offerId = null
        // const GrabId = () => {

        //     const categoryEndpoint = offer._links["wp:term"][0].href;

        //     const { data: category, error, loading } = useAxios({
        //         url: categoryEndpoint
        //     })
        //     if (loading) return null;
        //     if (!category) return null;
        //     if (category.length === 0) return null;
        //     if (error) return "Error getting taxonomy!";
        //     console.log(category)
        //     offerId = category.id
        // }

        // const mapOffers = offers.map((offer, index) => {
        //     return (
        //         <span key={index}>Offer titles: {offer.title.rendered}</span>
        //     )
        // })
        // return (
        //     mapOffers
        // )
        AOS.init()
        const offerId = offer._embedded["wp:term"][0][0].id
        return (
            <div data-aos="fade-up" className="offer-box" key={index}>
                {/* <GrabId /> */}
                <Link className="offer-link" to={`/offer/${offerId}`}>
                    <h3 className="offer-title">{offer.title.rendered}</h3>
                    <h2 className="offer-caterogy"><i>Offer Catergory: {offer._embedded["wp:term"][0][0].name}</i></h2>
                    <div className="content">
                        <div className="offer-content" dangerouslySetInnerHTML={{ __html: offer.content.rendered }} />
                    </div>
                </Link>
            </div>
        )
    })
    return showofferPosts
}

const Offers = () => {
    return (
        <>
            <div className="whatweoffer-container">
                <img className="whatweoffer-image" src="/img/whatweoffer.jpeg" />
                <h1 className="whatweoffer-header">What we offer</h1>
            </div>
            <div className="offer-boxes-container">
                <AllOffers />
            </div>
            <img className="orange-wave-divider2" src="/img/orangewave.png" />
            <div className="whatweoffer-images-box">
                <img className="wwo-images" src="/img/wwo1.png" />
                <img className="wwo-images" src="/img/wwo2.png" />
                <img className="wwo-images" src="/img/wwo3.png" />
            </div>
        </>
    )
}



export default Offers;

