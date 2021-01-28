import React from 'react'
import GlassCard from '../Component/Glasscard'
import Sunidhi from '../Asset/Sunidhi.png'
import { Container, Row, Col } from 'react-grid-system';


const Home = () =>

{
	
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
				<Container fluid>
					<Row >
						<Col > <GlassCard text="SHOP"/></Col>
						<Col ><GlassCard text="NOTIFY" /></Col>
					</Row>
					<Row >
						<Col > <GlassCard text="CHAT" /></Col>
						<Col ><GlassCard text="WALLET" /></Col>
					</Row>
					<Row >
						<Col > <GlassCard text="SERVICES" /></Col>
						<Col ><GlassCard text="PROFILE" /></Col>
					</Row>
				</Container>
					
				
				
					
			
			
				

			</div>
		</>
		
	)
}

export default Home;
