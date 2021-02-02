
import React from 'react';


const ButtonComp = ({ pic }) => {
	return (

		<div className="mybutton">
			<img style={{ width: '16px', height: '16px'}} src={pic} className="ml-1 mb-1" ></img>
		</div>

	)
}

export default ButtonComp