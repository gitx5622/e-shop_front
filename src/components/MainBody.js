import React, {Component} from 'react';
import '../css/MainBody.css';
import Slider from "./Slider";
import {Col, Card} from 'antd';
import delivery from '../assests/delivery.png';
import daily from '../assests/daily.png';
import festival from '../assests/festival.png';
import back3 from '../assests/back3.jpg';

const { Meta } = Card;

class MainBody extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="corousel">
                        <Slider/>
                    </div>
                    <div className="container">
                            <div className="row p-5" style={{zIndex:"1000px", position:"relative", background:"#fafafa", marginTop:"-100px", border:"1px"}}>
                                <div className="col-sm">
                                    <Col span={5}>
                                       <img src={delivery} alt="delivery"/>
                                    </Col>
                                    <Col span={19}>
                                        <h4>FREE SHIPPING</h4>
                                        <p>Free Shipping World Wide</p>
                                    </Col>
                                </div>
                                <div className="col-sm">
                                    <Col span={5}>
                                        <img src={daily} alt="daily"/>
                                    </Col>
                                    <Col span={19}>
                                    <h4>24 X 7 SERVICE</h4>
                                    <p>Online Service For New Customer</p>
                                    </Col>
                                </div>
                                <div className="col-sm">
                                    <Col span={5}>
                                        <img src={festival} alt="festival"/>
                                    </Col>
                                    <Col span={19}>
                                    <h4>FESTIVAL OFFER</h4>
                                    <p>New Online Special Festival Offer</p>
                                    </Col>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='back3'  style={{ backgroundImage:`url(${back3})`,backgroundAttachment: "fixed",backgroundRepeat: "no-repeat",backgroundSize:"cover" }}>
                <div className="row" style={{background:"white"}}>
                <div className="container" style={{background: "white", zIndex:"1000px"}}>
                    <center><h1 style={{fontFamily:'Roboto',}}>Product List</h1></center>
                    <div className="row product-cards animated zoomInLeft">
                        <div className="col-sm">
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </div>
                        <div className="col-sm">
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>,
                        </div>
                        <div className="col-sm">
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>,
                        </div>
                        <div className="col-sm">
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </div>
                    </div>
                </div>
                </div>
                    <div style={{height:"400px"}}>
                        <div className="save-item">
                            <h1>SAVE 10% </h1>
                            <p><strong>ON FOOD MARKET</strong></p>
                            <h2>SUMMER SALE</h2>
                        </div>
                    </div>
                </div>

                <div className="row" style={{background:"white"}}>
                    <div className="container" style={{background: "white", zIndex:"1000px"}}>
                        <center><h1 style={{fontFamily:'Roboto',}}>Product List</h1></center>
                        <div className="row product-cards animated zoomInDown">
                            <div className="col-sm">
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </div>
                            <div className="col-sm">
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>,
                            </div>
                            <div className="col-sm">
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>,
                            </div>
                            <div className="col-sm">
                                <Card
                                    hoverable
                                    style={{ width: 240 }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>,
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBody;