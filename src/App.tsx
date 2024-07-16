import React from 'react'

import Router from './router'
import { Provider } from 'react-redux'
import { store } from './store'
import { ThemeProvider } from '@rneui/themed'
import { theme } from './theme'

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
