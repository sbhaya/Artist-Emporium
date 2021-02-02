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
			
			<div className="bg">
				<div className="px-3 pb-5">				
				<Container fluid>
					<Row >
						<Col><GlassCard text="SHOP" route="/shop" /></Col>
							<Col ><GlassCard text="NOTIFY" route="/notify"   /></Col>
					</Row>
					<Row >
							<Col ><GlassCard text="CHAT" route="/chat"  /></Col>
							<Col ><GlassCard text="WALLET" route="/wallet"  /></Col>
					</Row>
					<Row >
							<Col ><GlassCard text="SERVICES" route="/services"  /></Col>
							<Col ><GlassCard text="PROFILE" route="/profile"  /></Col>
					</Row>
				</Container>
				</div>
			</div>
		</>
		
	)
}

export default Home;
