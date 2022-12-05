import {useState} from 'react'
function Home(){
	const [village,setVillage]=useState("america");
	const [country,setCountry]=useState("India")
	return(
		<div>
		{/*<h1>{country}</h1>
				<p>{village}</p>*/}
		 <input placeholder="enter village name"onChange={(e)=>setVillage(e.target.value)}/><br/>
		 <input placeholder="enter country name" onChange={(e)=>setCountry(e.target.value)}/><br/>
		 <button onClick={()=>console.log(village,country)}>submit</button>
		</div>
		)
}

export default Home