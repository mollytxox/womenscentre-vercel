import { useAxios } from "use-axios-client"
import AOS from 'aos'
import 'aos/dist/aos.css';

// grab our endpoint url from our .env.development
const baseUrl = process.env.REACT_APP_WOMENS_CENTRE_WP_API_BASEURL
// http://localhost:8888/womenscentre/wp-json/wp/v2/posts?_embed 
// `http://molly.yoobeestudent.net/wordpress/wp-json/wp/v2/posts?_embed` 
const AllNews = () => {
    const endpoint = baseUrl + "posts?_embed"
    const { data: womensPosts, error, loading } = useAxios({
        url: endpoint
    })

    // check if the news posts have been returned
    if (loading) return (
        <p>Loading...</p>
    )
    if (!womensPosts) return "No posts found"
    if (error) return "Error"

    console.log(womensPosts)

    const showwomensPosts = womensPosts.map((post, index) => {

        // check if the featured image exists, if not then use a placeholder
        const GetImageOrPlaceholder = () => {
            if (post._embedded['wp:featuredmedia']) {
                return (
                    <img className="aboutus-images" src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} />
                )
            } else {
                return (
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png" alt="Placeholder" />
                )
            }
        }
        AOS.init()
        return (
            <div data-aos="flip-up" id={index} className="item" key={index}>
                <h3 className="aboutus-titles">{post.title.rendered}</h3>
                <div className="aboutus-text">
                    <div className="post-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    <GetImageOrPlaceholder />
                </div>
                {/* <GetImageOrPlaceholder /> */}
            </div>
        )
    })
    return showwomensPosts
}

const News = () => {
    return (
        <div id="news">
            <div className="whatweoffer-container">
                <img className="whatweoffer-image" src="/img/aboutusbanner.png" />
                <h1 className="whatweoffer-header">About Us</h1>
            </div>
            <div className="aboutus-header-container">
                <h2 className="aboutus-header">About Us</h2>
                <p className="aboutus-header-subtext">The Centre was initially established as a community link for Women’s Refuge, where women leaving Refuge could obtain ongoing support and resources. Since the mid-nineties, with Refuges starting their own community support, the Centre’s client base has opened up, with a wide range of women now accessing our services.  For many women the Centre is a place to gather information, work through difficult issues, be supported, learn, and or rest before going out into the wider world again.

                    We have extensive networking contacts, and if we cannot assist you with any of our specialised services we can provide information/links to appropriate agencies and organisations that can give further assistance.

                    The Centre is registered as a charitable entity under the Charities Act 2005 under registration number CC10043.</p>
                <h2 className="aboutus-header">Our Vision</h2>
                <p className="aboutus-header-subtext">A world in which all women have equal rights and opportunities.</p>
            </div>
            <div id="item-container">
                <AllNews />
            </div>
        </div>
    )
}

export default News