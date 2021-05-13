

import { useState } from 'react'



const oddBg = '#5524DB'
const evenBg = '#244EDB'
const selecedBg ='#0ABDCC'

const Spring = () => {
	

	const [springList, setSpringList] = useState([

		'MOTÖRHEAD', 'DIO', 'IRON MAIDEN', 'METALLICA', 'HATEBREED'  

	])
	//när man ska välja någonting i en if sats då är det 2 ||,
	// när man talar om en datatyp i typescript då är det bara 1 | 
	const [selectedSign, setSelectedSign] = useState< null | string >(null)


	const [newSign, setNewSign] = useState('')

	//en lista med vårtecken och varje vår band ska stylsa och varje div element ska stylas 
	const springItem = {

		padding: '0.2em 1em'

	}

	const handleAddSign = () => {

		setSpringList([ ...springList, newSign])
		setNewSign('')		
	}

	

	
	return(	
	
	<section>

		<h1>Vår METAL</h1>
		
		{springList.map((sign, index) => (
			<div key={sign}
				// den ytre parantesen är en react mustach och den indre är ett objekt 
						// för att kolla om idex är udda ellre inte
				style= { { ...springItem, backgroundColor: sign === selectedSign ? 
					selecedBg : (index %2 === 1 ? oddBg : evenBg)} }	
	// när man klickar på det här div elementet, då ska man se till att man har klcikat på de här
				onClick={() => setSelectedSign(sign)}		
			> {sign} </div>
		))}



		{selectedSign === null ?
		<p>Välj ett band</p>:
		<p>Hell Yeah <strong> {selectedSign} </strong></p>
		}

		<p>Lägg till band 

		<input type="text" placeholder="Ett vårtecken"
					onChange={event => {setNewSign(event.target.value)}}
					value={newSign} />
				<button onClick={handleAddSign}> Lägg till </button>
		</p>
			
			
	</section>
	)}

	export default Spring