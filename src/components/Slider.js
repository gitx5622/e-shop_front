import React, { Component } from 'react'
import back1 from '../assests/back1.jpg';
import back2 from '../assests/back2.jpg';
import back4 from '../assests/back4.jpg';
import back5 from '../assests/back5.jpg';
import '../css/Slider.css';


class Slider extends Component {
    render() {
        return (
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="5000">
                        <img src={back1} className="image d-block w-100" alt="..."/>
                        <div className="carousel-caption">
                            <center>
                            <p>Special Offer</p>
                            <h1><strong>FRESH VEGETABLES</strong></h1>
                            <button type="submit" className="btn btn-solid" name="subscribe"
                                    id="mc-embedded-subscribe"
                                    data-trans-key="general.newsletter_form.submit">Shop Now
                            </button>
                            </center>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src={back2} className="image d-block w-100" alt="..."/>
                        <div className="carousel-caption">
                            <p>Save 20% on </p>
                            <h1><strong>FRESH FRUITS</strong></h1>
                            <button type="submit" className="btn btn-solid" name="subscribe"
                                    id="mc-embedded-subscribe"
                                    data-trans-key="general.newsletter_form.submit">Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src={back4} className="image d-block w-100" alt="..."/>
                        <div className="carousel-caption">
                            <p>Save 20% on </p>
                            <h1><strong>WOMEN FASHION</strong></h1>
                            <button type="submit" className="btn btn-solid" name="subscribe"
                                    id="mc-embedded-subscribe"
                                    data-trans-key="general.newsletter_form.submit">Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="2000">
                        <img src={back5} className="image d-block w-100" alt="..."/>
                        <div className="carousel-caption">
                            <p>Special offer</p>
                            <h1><strong>THE BAG</strong></h1>
                            <button type="submit" className="btn btn-solid" name="subscribe"
                                    id="mc-embedded-subscribe"
                                    data-trans-key="general.newsletter_form.submit">Shop Now
                            </button>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{color:"black"}}/>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" style={{color:"black"}}/>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Slider
