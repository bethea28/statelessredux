export function ADD_CARD(text) {
  return({
    type: "ADD_CARD",
    card: "JUST SAY NO"
  })
}

export var addArtist=(text)=>({
  type:'addArtist', text:text
})

export var handle=(text)=>({
	type:'handle', data:text
})