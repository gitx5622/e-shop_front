import React, {Component} from 'react';
import axios from 'axios';
import API_ROUTE from "../constants";
import '../css/SearchBar.css';

class SearchBar extends Component {

    constructor( props ) {
        super( props );
        this.state = {
            query: '',
            results: [],
            loading: false,
            message: '',
        };
        this.cancel = '';

    }

    fetchSearchResults = (updatedPageNo = '', query) => {

        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';

        // By default the limit of results is 20
        const searchUrl = `${API_ROUTE}/getproducts?e&q=${query}${pageNumber}`;

        if (this.cancel) {
            // Cancel the previous request before making a new request
            this.cancel.cancel();
        }
        // Create a new CancelToken
        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
            cancelToken: this.cancel.token,
        })
            .then((res) => {

                const resultNotFoundMsg = !res.data.response.length
                    ? 'There are no more search results. Please try a new search.'
                    : '';

                this.setState({
                    results: res.data.response,
                    message: resultNotFoundMsg,
                    loading: false,
                });
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch results.Please check network',
                    });
                }
            });
    };

    renderSearchResults = () => {
        const {results, query} = this.state;
        const filteredCharacters = results.filter(product => {
            return product.title.toLowerCase().includes(query.toLowerCase());
        });

        if (Object.keys(results).length && results.length) {
            return (
                <div className="results-container">
                    {filteredCharacters && filteredCharacters.slice(1,9).map(product => {
                        return (
                            <a key={product.id} href={'/product/' + product.id} className="result-items"
                               style={{textDecoration: "none"}}>
                                <div style={{width: "530px"}}>
                                    <ul className="search-results">
                                        <li>
                                           <img src={product.image_url_1} alt="image1" width="40px" height="40px"/>
                                        </li>
                                        <li>
                                            {product.title}
                                        </li>
                                    </ul>
                                </div>
                            </a>
                        );
                    })}
                </div>
            );
        }
    };


    handleOnInputChange = (event) => {
        const query = event.target.value;

        if (!query) {
            this.setState({query, results: [], message : 'There are no more search results. Please try a new search.'});
        } else {
            this.setState({query, loading: true, message: ''}, () => {
                this.fetchSearchResults(1, query);
            });
        }
    };

    render() {
        const {query} = this.state;
        return (
            <div>

                {/*Search Input*/}

                <label className="search-label" htmlFor="search-input">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"
                               value={query}
                               onChange={this.handleOnInputChange}
                               style={{width:"600px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}}
                               placeholder="Search for a product ...."/>
                        <div className="input-group-append">
                            <button onClick={this.renderSearchResults} type="submit" className="btn btn-solid"
                                    style={{padding:"5px",borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}>
                                Search
                            </button>
                        </div>
                    </div>
                </label>
                {/*Result*/}
                <div style={{position: "absolute",zIndex:100}}>
                    {this.renderSearchResults()}
                </div>
            </div>
        );
    }
}

export default SearchBar;
//
// const filteredCharacters = posts.filter(post => {
//     return post.content.toLowerCase().includes(query.toLowerCase());
// });
//
// // Searching the filter post using indefOf
// const filtered = _.filter(posts, (post) => {
//     return post.title.indexOf(query) > -1
// });
// console.log(filtered, filteredCharacters);