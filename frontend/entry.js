

import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import ArtistContainer from './components/artist_container'
import store from './store'

const App = () =>(
  <Provider store = {store}>
    <ArtistContainer />
  </Provider>
)


render(
  <App />,document.getElementById('root')
)