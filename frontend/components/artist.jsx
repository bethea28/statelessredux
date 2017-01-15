import React from 'react'
import addArtist from '../actions'
import handle from '../actions'


const Artist = ({text, cards ,addArtist,handle})=>(
// console.log(cards)
<div>
{text}
  <button onClick={addArtist}>Artist</button>
	<input onChange={handle}/>

</div>

)


export default Artist
