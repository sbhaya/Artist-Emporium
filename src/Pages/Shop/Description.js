import React from 'react'
import GlassCard from '../../Component/Glasscard'
import Sunidhi from '../../Asset/Sunidhi.png'
import Flower from '../../Asset/flower.png'
import { Container, Row, Col } from 'react-grid-system';
import ButtonComp from '../../Component/ButtonComp';
import shop from '../../Asset/shop.png';
import share from '../../Asset/share.png';
import chat from '../../Asset/chat.png';
import { Link } from "react-router-dom";
import Chat from './Chat';


const Desc = () => {

	return (
		<>

			<Container className="container d-flex justify-content-center">
				<Row>
					<Col>
						<img style={{ marginLeft: "30px" }} src={Sunidhi} alt="Sunidhi" />
						<h6 className="d-flex justify-content-center">Namaste</h6>
						<h1>Sunidhi</h1>
					</Col>
				</Row>
			</Container>
			
			<div className="bg ">				
				<div className="glasscard ml-4 row " style={{
					height: '470px',
					width: '354px'				
				}}>
					<div className="descimage col-5">
						<img src={Flower} alt="flower" style={{width:'165px'}}></img>
						<h4 className="Corbel mb-0 ml-1"><b>Flower</b></h4>
						<h5 className="ml-1">Painting</h5>
							<div className="col-8 d-flex align-items-left rupeelabel Rye  " style={{ height: '25px', width: '80px'}}>
								<h5 style={{ color: 'white' }}>₹ 2500/-</h5>
						</div>
						{/*Category Labels*/}
						<div className="row ml-0" style={{ marginTop: '35px' }}>
							<div className="col-6 d-flex align-items-left catlabel1 mb-1 " style={{  marginLeft:'-12px' }}>
									<h6><b>Digital Art</b></h6>
							</div>
							<div className="col-6 catlabel2 ml-2 mb-1">
									<h6><b>S. Cause</b></h6>
							</div>
							<div className="col-6 catlabel2  " style={{ marginLeft: '-12px' }} >
								<h6><b>Mix Media</b></h6>
							</div>
							<div className="col-6 d-flex align-items-left catlabel1 ml-2 " >
								<h6><b>Nature</b></h6>
							</div>
							
						</div>			
					</div>
					{/*Green Card*/}
						<div className="descbox col-6 pl-3">
								<h4 className="Corbel pt-1"><b>About the Artwork</b></h4>
								<h5>The art has been painted by hands using poster colors.</h5>
									<h5><b>Size: </b>A3</h5>
									<h5><b>Paper: </b>250 GSM</h5>
						<h5><b>Medium: </b>Poster Color</h5>
						<div className="ml-5 mr-4 d-flex justify-content-between">
							<ButtonComp pic={share} className="col-2 " />
							<Link to='/Chat' className="linkstyle"><ButtonComp pic={chat} className="col-2 " /></Link>
							
							</div>
						</div>
					{/*Orange Card*/}
				
							<div className="col-7 delbox pr-2 pl-3 mt-4 ml-5" style={{height:'174px'}}>
										<h4 className="Corbel pt-1"><b>Delivery Details</b></h4>								
								<h5><b>Zipcode :  </b></h5>
								<h5><b>Delivery charges: </b> <u>₹ 200/-</u></h5>
								<h5><b>Date of Delivery : </b><u>26th May 2021</u></h5>
								<h5><b>Total Cost : </b></h5>
						<div className="ml-5"><ButtonComp pic={shop} /></div>
					</div>
					
				
			</div>
				{/*About Artist*/}
				<div className=" glasscard pr-2 pl-3 mt-4 ml-4" style={{
					width:'355px',
					height:'101px',
					bottom: '1.36 %',
					background: 'rgba(255, 255, 255, 0.8)',
				}}>
					<h4 className="Corbel pt-1"><b>About Sunidhi</b></h4>
					<h5>I am a self-trained artist. Currently pursuing Masters in Computer Application from Delhi, India.
I like to paint often, and wish to turn it as my side hustle. I also create art for important causes.</h5>
				
				</div>

			</div>
		</>

	)
}

export default Desc;
