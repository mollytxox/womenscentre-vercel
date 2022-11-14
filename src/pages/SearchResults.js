import { useParams } from "react-router-dom"
import { useAxios } from "use-axios-client"
import { Link } from "react-router-dom";

import returnSubtype from "./utilities/returnSubtype";

const baseUrl = process.env.REACT_APP_WOMENS_CENTRE_WP_API_BASEURL
// http://localhost:8888/womenscentre/wp-json/wp/v2/ 
// `http://molly.yoobeestudent.net/wordpress/wp-json/wp/v2/` 
const SearchResults = () => {
    const params = useParams();
    const searchString = params.searchString
    const searchEndpoint = `${baseUrl}search/?subtype[]=post&subtype[]=offer&search=${searchString}`
    console.log(params)
    const { data: search, error, loading } = useAxios({
        url: searchEndpoint
    })

    // check if the news posts have been returned
    if (loading) return (
        <p>Loading...</p>
    )
    if (!search) return "No posts found"
    if (error) return "Error"

    console.log(search)


    const allResults = search.map((search, index) => {
        return (
            < Link to={`/${returnSubtype(search.subtype)}/${search.id}`} key={index} >
                <div className="search-result">
                    <h3>{search.title}</h3>
                </div>
            </Link >
        )
    })

    return (
        <div id="results-page">
            <h1> Search Results</h1>
            <p>Searched for "{params.searchString}"</p>
            <p>Found {search.length} results.</p>
            <div className="item-container">
                {allResults}
            </div>
        </div>
    )
}

export default SearchResults