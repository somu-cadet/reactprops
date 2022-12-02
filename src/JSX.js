import React from 'react'
function JSX(){
	/*return(
		<div>
		<h1>have a nice day</h1>
		</div>
		)*/
	return React.createElement(
		"div",
		{id:"one",className:"classone"},
		React.createElement("h1",null,"have a nice day")
		)
}
export default JSX