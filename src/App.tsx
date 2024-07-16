import React from 'react'

import Router from './router'
import { Provider } from 'react-redux'
import { store } from './store'

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  )
}

export default App
