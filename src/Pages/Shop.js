import React from 'react'
import ShopCard from '../Component/ShopCard'
import { Container, Row, Col } from 'react-grid-system'
/* Images */
import Sunidhi from '../Asset/Sunidhi.png'
import dailywager from '../Asset/dailywager.png'
import amaze from '../Asset/amaze.png'
import fireworks from '../Asset/fireworks.png'
import nature from '../Asset/nature.png'
import abstract from '../Asset/abstract.png'
import abstract2 from '../Asset/abstract2.png'
import ship from '../Asset/ship.png'
import flower from '../Asset/flower.png'
import nature2 from '../Asset/Nature2.png'
import floral from '../Asset/floral.png'
import abstract3 from '../Asset/abstract3.png'
import landscape from '../Asset/landscape.png'



const Shop = () =>

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
			
			<div className="bg pl-2" >				
				<Container fluid>
					<Row >
						<Col > <ShopCard pic={dailywager} cost='2500' Heading='Daily Wagers' Subhead='Digital Painting'/></Col>
						<Col > <ShopCard pic={amaze} cost='5000' Heading='Flower Vase' Subhead='Digital Painting'/></Col>
						<Col > <ShopCard pic={fireworks} cost='3500' Heading='Fireworks' Subhead='Digital Painting' /></Col> 
					</Row>
					<Row >
						<Col > <ShopCard pic={nature} cost='1500' Heading='Nature' Subhead='Watercolor Painting' /></Col>
						<Col > <ShopCard pic={abstract} cost='2100' Heading='Abstract' Subhead='Digital Painting' /></Col>
						<Col > <ShopCard pic={abstract2} cost='2510' Heading='Abstract' Subhead='Digital Painting'/></Col>
					</Row>
					<Row >
						<Col > <ShopCard pic={ship} cost='1500' Heading='Ship' Subhead='Digital Painting' /></Col>
						<Col > <ShopCard pic={flower} cost='5200' Heading='Flowers' Subhead='Digital Painting' /></Col>
						<Col > <ShopCard pic={nature2} cost='1000' Heading='Nature' Subhead='Mixmedia Painting'/></Col>
					</Row>
					<Row >
						<Col > <ShopCard pic={floral} cost='1520' Heading='Ship' Subhead='Digital Painting' /></Col>
						<Col > <ShopCard pic={abstract3} cost='1500' Heading='Flowers' Subhead='Acrylic Painting' /></Col>
						<Col > <ShopCard pic={landscape} cost='3000' Heading='Nature' Subhead='Digital Painting' /></Col>
					</Row>
					
				</Container>
					
				
				
					
			
			
				

			</div>
		</>
		
	)
}

export default Shop;
