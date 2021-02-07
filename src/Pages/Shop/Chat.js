import React from 'react'
import GlassCard from '../../Component/Glasscard'
import Sunidhi from '../../Asset/Sunidhi.png'
import Nrityanjali from '../../Asset/Nrityanjali.png'
import Flower from '../../Asset/flower.png'
import { Container, Row, Col } from 'react-grid-system';
import ButtonComp from '../../Component/ButtonComp';
import shop from '../../Asset/shop.png';
import share from '../../Asset/share.png';
import chat from '../../Asset/chat.png';



const Chat = () => {

	return (
		<>

			<Container className="container ">
				<Row>
					<img style={{ marginLeft: '35px', width: '25px', height:'25px' }} src={Sunidhi} alt="Sunidhi" />
						<h6 className="ml-2 mt-2 d-flex justify-content-center">Sunidhi's Shop</h6>				
				</Row>
			</Container>

			<div className="bg ">
				<div className="glasscard ml-4 row col-12" style={{
					height: '470px',
					width: '354px'
				}}>
					<div className="col-6">
						<img src={Flower} alt="flower" style={{ width: '82px' }}></img>
						<h4 className="Corbel mb-0 "><b>Flower</b></h4>
						<h5 className="ml-1">Painting</h5>
						<div className="col-8 d-flex align-items-left rupeelabel Rye  " style={{ height: '25px', width: '80px' }}>
							<h5 style={{ color: 'white' }}>₹ 2500/-</h5>
						</div>
					</div>
					<div className="col-6 ">
						{/*Green Card*/}
						<div className="glasscard " style={{ background: 'rgba(208, 255, 127, 0.5)'}} >
							<h4 className="Corbel pt-1"><b>About the Artwork</b></h4>
							<h5>The art has been painted by hands using poster colors.</h5>
							<h5><b>Size: </b>A3</h5>
							<h5><b>Paper: </b>250 GSM</h5>
							<h5><b>Medium: </b>Poster Color</h5>
							<div className="ml-5 mr-4 d-flex justify-content-between">
								<ButtonComp pic={share} className="col-2 " />
								<ButtonComp pic={chat} className="col-2 " />

							</div>
						</div>
						
					</div>
					{/*Category Labels*/}

					<div className=" col-6">
						<div className="row ml-0" >
							<div className="col-6 d-flex align-items-left catlabel1 mb-1 " style={{ marginLeft: '-12px' }}>
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
					{/*Category Labels end*/}

					{/*Chat Area*/}
					<div className="row">
						<div className="col-3">
							<img style={{ marginLeft: '5px', width: '25px', height: '25px' }} src={Sunidhi} alt="Sunidhi" />
						</div>
						<div>
						<div className="col-9">
							<div className="glasscard " style={{ background: 'rgba(208, 255, 127, 0.5)' , width:'238px', height:'51px'}} >
							</div>
						</div>
				</div>
			</div>
					<div className="row ml-5">
						<div className="col-3 ">
							<img style={{ marginLeft: '5px', width: '25px', height: '30px', border: 'none'	 }} src={Nrityanjali} alt="Nrityanjali" />
						</div>
						<div>
							<div className="col-6 ">
								<div className="glasscard " style={{ background: '#FFB164', width: '238px', height: '51px', border:'none' }} >
								</div>
							</div>
						</div>
					</div>
				</div></div>

	
				
					


		</>

	)
}

export default Chat;
