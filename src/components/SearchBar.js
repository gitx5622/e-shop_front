import React, {Component} from 'react';
import {Input} from "antd";
import axios from 'axios';
import API_ROUTE from "../constants";


class SearchBar extends Component {
<<<<<<< HEAD
    constructor( props ) {
        super( props );
=======
    constructor(props) {
        super(props);
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702

        this.state = {
            query: '',
            results: [],
            loading: false,
            message: '',
        };
        this.cancel = '';

    }


<<<<<<< HEAD
    fetchSearchResults = (updatedPageNo = '', query ) => {
=======
    fetchSearchResults = (updatedPageNo = '', query) => {
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702

        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';

        // By default the limit of results is 20
        const searchUrl = `${API_ROUTE}/posts?e&q=${query}${pageNumber}`;

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
        const filteredCharacters = results.filter(post => {
            return (post.content && post.title).toLowerCase().includes(query.toLowerCase());
        });
        if (Object.keys(results).length && results.length) {
            return (
<<<<<<< HEAD
                <div className="results-container" style={{height:"400px"}}>
                    {filteredCharacters && filteredCharacters.map(result => {
                        return (
                            <a key={result.id} href={'/posts/' + result.id} className="result-items" style={{textDecoration:"none"}}>
                                <div className="card" style={{width:"300px"}}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" style={{borderBottom:"1px solid whitesmoke"}}>{result.title}</li>
=======
                <div className="results-container" style={{height: "400px"}}>
                    {filteredCharacters && filteredCharacters.map(result => {
                        return (
                            <a key={result.id} href={'/posts/' + result.id} className="result-items"
                               style={{textDecoration: "none"}}>
                                <div className="card" style={{width: "300px"}}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item"
                                            style={{borderBottom: "1px solid whitesmoke"}}>{result.title}</li>
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702
                                        <li className="list-group-item">{result.content}</li>
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

<<<<<<< HEAD
        if ( ! query ) {
            this.setState({ query, results: [], message: 'No results Found' } );
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
=======
        if (!query) {
            this.setState({query, results: [], message: 'No results Found'});
        } else {
            this.setState({query, loading: true, message: ''}, () => {
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702
                this.fetchSearchResults(1, query);
            });
        }
    };
<<<<<<< HEAD
    render() {
        const { query } = this.state;
=======

    render() {
        const {query} = this.state;
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702
        return (
            <div>
                {/*Heading*/}
                <h2 className="heading">Search Posts</h2>

                {/*Search Input*/}

                <label className="search-label" htmlFor="search-input">
                    <Input
<<<<<<< HEAD
                        style={{borderRadius:"50px",width:"290px"}}
=======
                        style={{borderRadius: "50px", width: "290px"}}
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702
                        type="text"
                        value={query}
                        id="search-input"
                        placeholder="Search..."
                        enterButton="Search"
                        size="large"
                        onChange={this.handleOnInputChange}
                    />

                </label>
                {/*Result*/}
<<<<<<< HEAD
                <div style={{overflowX:"hidden",overflowY:"auto", position:"absolute"}}>
                { this.renderSearchResults() }
=======
                <div style={{overflowX: "hidden", overflowY: "auto", position: "absolute"}}>
                    {this.renderSearchResults()}
>>>>>>> 4b60840820a4944614c59f5fc9a398b7c536e702
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