import React from 'react'
import GlassCard from '../../Component/Glasscard'
import Sunidhi from '../../Asset/Sunidhi.png'
import Flower from '../../Asset/flower.png'
import { Container, Row, Col } from 'react-grid-system';



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
				<div className="glasscard ml-4 row" style={{
					height: '447px',
					width: '354px'
				}}>
					<div className="descimage col-5">
							<img src={Flower} alt="flower"></img>
							<div className="col-8 d-flex align-items-left rupeelabel Rye  " style={{ height: '25px', width: '69px', marginTop: '50px' }}>
								<h5 style={{ color: 'white' }}>₹ 2500 /-</h5>
							</div>
						
						<div className="col-8 d-flex align-items-left rupeelabel " style={{ height: '15px', width: '65px', marginTop: '80px', backgroundColor:'#FFB164' }}>
							<h6><b>Digital Art</b></h6>
						</div>
						
						<h4 className="Corbel mb-0 ml-1"><b>Flower</b></h4>
						<h5 className="ml-1">Painting</h5>
					</div>
						<div className="descbox col-6 pl-3">
								<h4 className="Corbel pt-1"><b>About the Artwork</b></h4>
								<h5>The art has been painted by hands using poster colors.</h5>
									<h5><b>Size: </b>A3</h5>
									<h5><b>Paper: </b>250 GSM</h5>
									<h5><b>Medium: </b>Poster Color</h5>							
						</div>
					</div>
				
			</div>
		</>

	)
}

export default Desc;
