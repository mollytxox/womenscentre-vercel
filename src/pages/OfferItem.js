import { useAxios } from "use-axios-client"
import { useParams, useNavigate } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css';

// grab our endpoint url 
const baseUrl = process.env.REACT_APP_WOMENS_CENTRE_WP_API_BASEURL
// http://localhost:8888/womenscentre/wp-json/wp/v2/ 
// `http://molly.yoobeestudent.net/wordpress/wp-json/wp/v2/` 
const RenderOffers = () => {
    // get the id of the offer we clicked on
    const params = useParams();
    const endpoint = `${baseUrl}offer?catergory=${params.id}&_embed`

    const { data: offers, error, loading } = useAxios({
        url: endpoint
    })

    // check if the news posts have been returned
    if (loading) return "Loading...";
    if (!offers) return "No data...";
    if (offers.length === 0) return "No offers found!";
    if (error) return "Error!";

    console.log(offers)

    AOS.init()
    const mapOffers = offers.map((offer, index) => {
        return (
            <div data-aos="fade-up" className="offer-item-clicked" key={index}>
                <h3 className="offer-titles-clicked">{offer.title.rendered}</h3>
                <img className="offer-image" src={offer._embedded['wp:featuredmedia'][0].source_url} alt={offer.title.rendered} />
                {/* <div id="back-button" onClick={() => {
                    navigate(-1)
                }}>Back</div> */}
            </div>
        )
    })
    return (
        mapOffers
    )

}


const RenderedOfferCatergory = () => {
    const navigate = useNavigate();
    // params gets the id of the genre
    const params = useParams();
    // declare the endpoint for this specific genre
    const endpoint = `${baseUrl}catergory/${params.id}`


    // query the endpoint using wordpress api
    const { data: category, error, loading } = useAxios({
        url: endpoint
    })

    // check if the news posts have been returned
    if (loading) return "Loading...";
    if (!category) return "No data...";
    if (category.length === 0) return "No catergories found!";
    if (error) return "Error!";

    console.log(category)

    return (
        <div id="offer-title-box">
            <div id="back-button" onClick={() => {
                navigate(-1)
            }}>Back</div>
            <span className="offer-caterogy-clicked"><i>{category.name}</i></span>
        </div>
    )
}

const OfferItem = () => {
    return (
        <>
            <RenderedOfferCatergory />
            <div className="rendered-offers-container">
                <RenderOffers />
            </div>

        </>
    )
}

export default OfferItem;