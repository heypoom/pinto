import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'

import fontawesome from '@fortawesome/fontawesome'
import faFreeRegular from '@fortawesome/fontawesome-free-regular'
import faFreeSolid from '@fortawesome/fontawesome-free-solid'
import faProRegular from '@fortawesome/fontawesome-pro-regular'
import faProLight from '@fortawesome/fontawesome-pro-light'
import faProSolid from '@fortawesome/fontawesome-pro-solid'

import App from './components/App'

if (typeof document !== 'undefined') {
  fontawesome.library.add(
    faFreeRegular,
    faFreeSolid,
    faProRegular,
    faProLight,
    faProSolid,
  )

  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate

  const render = Component => {
    renderMethod(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('root'),
    )
  }

  render(App)

  if (module.hot) {
    module.hot.accept('./components/App', () => {
      render(require('./components/App').default)
    })
  }
}

export default App
