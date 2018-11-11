import { createStore, combineReducers } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './reducer'

const persistConfig = {
  key: 'shop:cart',
  storage,
}

const rootReducer = combineReducers({ cart: cartReducer })

const persistedReducer = persistReducer(persistConfig, rootReducer)

const initializeStore = (initialState) => {
  const store = createStore(
    persistedReducer,
    initialState,
    devToolsEnhancer({
      name: 'Store app',
    }),
  )
  const persistor = persistStore(store)

  return { store, persistor }
}

export default initializeStore
