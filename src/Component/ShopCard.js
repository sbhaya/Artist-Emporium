
import React from 'react';
import ButtonComp from './ButtonComp';
import shop from '../Asset/shop.png';
import share from '../Asset/share.png';
import chat from '../Asset/chat.png';
import { Container, Row, Col } from 'react-grid-system';

const ShopCard = ({ pic, cost, Heading, Subhead }) =>
 {
	return (	

		<div className="cardshop glasscard row"	>
			<img style={{ borderRadius: '5 px', width: '89px', height: '75px' }} src={pic} className="px-2 col-12 d-flex align-items-center " ></img>
			<Container className="col-8 pt-1 px-2 d-flex align-items-left">
				<Row>					
					<h2>{Heading}<h5>({Subhead})</h5></h2>
				</Row>
			</Container>
			<div className="col-8 py-1 px-2 d-flex align-items-left rupeelabel">
				<h5 style={{ color: 'white' }}>₹ {cost} /-</h5>				
			</div>
			<Container className="mt-2 px-3">
				<Row>
					<Col className="px-1"><ButtonComp pic={share} /></Col>
					<Col className="px-1"><ButtonComp pic={shop} /></Col>
					<Col className="px-1"><ButtonComp pic={chat} /></Col>			
				</Row>
			</Container>
		</div>
		
	)
}

export default ShopCard