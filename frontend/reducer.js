import {ADD_CARD} from "./actions";
import store from './store'

const _defaultState = {
  cards: '',
  text:''
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case "handle":
      return Object.assign({},oldState, {cards: store.getState().cards += action.data})
    case 'addArtist':
      return Object.assign({},oldState, {text: store.getState().text += action.text})

    default:
      return oldState;
  }
}

export default reducer;
