import React, { useEffect } from 'react'

import Router from './router'
import { Provider } from 'react-redux'
import { store } from './store'
import { ThemeProvider } from '@rneui/themed'
import { theme } from './theme'
import { RootSiblingParent } from 'react-native-root-siblings'
import { rootSiblingsService } from './services/rootSiblings'

function App(): React.JSX.Element {
  useEffect(() => {
    rootSiblingsService.init()
  }, [])

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <RootSiblingParent>
            <Router />
          </RootSiblingParent>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
