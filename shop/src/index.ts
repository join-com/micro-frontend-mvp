import { default as initializeStore } from './store'
import { default as makeButtonWebComponent } from './button'
import { default as makeCartWebComponent } from './cart'
import { default as makePageWebComponent } from './page'

export const init = ({ eev }) => {
  const { store, persistor } = initializeStore({})

  makeButtonWebComponent({ store, persistor })
  makeCartWebComponent({ store, persistor })
  makePageWebComponent({ store, persistor })
}
