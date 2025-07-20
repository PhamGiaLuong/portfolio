import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from '@/configs/routes/AppRouter'

/*
 * Redux Store
 */
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '@/redux/store'

/*
 * i18next translation
 */
import './i18next'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
