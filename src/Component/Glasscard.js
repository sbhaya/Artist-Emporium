
import React from 'react';


const GlassCard = ({text}) =>
 {
	return (	

		<div style={{
			backgroundColor: "white",
			borderRadius: "10px",
			opacity: "0.5"		
			}} className="cardhome"
		>
			<h5 style={{ padding: '25%' }} >{text}</h5>
			</div>
		
	)
}

export default GlassCard