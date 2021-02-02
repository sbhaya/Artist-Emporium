
import React from 'react';
import { Link } from "react-router-dom";

const GlassCard = ({text, route}) =>
 {
	return (
		<Link to={route} className="linkstyle">
			<div className="cardhome glasscard ">
				<h6 style={{ padding: '25%' }}
				className="d-flex justify-content-center ">
				{text}
			</h6>
			</div>
		</Link>
		
	)
}

export default GlassCard