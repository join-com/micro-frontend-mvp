import canUseDom from './canUseDom'

const SHOP_SERVICE_BASE_URL = 'http://localhost:3001'

// const loadSeparateFiles = () => {
//   const promises = [
//     System.import(`${SHOP_SERVICE_BASE_URL}/store.js`),
//     System.import(`${SHOP_SERVICE_BASE_URL}/cart.js`),
//     System.import(`${SHOP_SERVICE_BASE_URL}/button.js`),
//   ]

//   return Promise.all(promises).then(([store, cart, button]) => {
//     const { default: initializeStore } = store
//     const { default: makeButtonWebComponent } = button
//     const { default: makeCartWebComponent } = cart

//     return { initializeStore, makeButtonWebComponent, makeCartWebComponent }
//   })
// }

const load = () => System.import(`${SHOP_SERVICE_BASE_URL}/index.js`)

const loadShopWebComponents = () => {
  const Eev = require('eev')
  const eev = new Eev()

  // loadSeparateFiles()
  load().then(({ initializeStore, makeButtonWebComponent, makeCartWebComponent }) => {
    const { store, persistor } = initializeStore({})

    makeButtonWebComponent({ eev, store, persistor })
    makeCartWebComponent({ eev, store, persistor })
  })
}

const initWebComponents = () => {
  if (!canUseDom) {
    return
  }

  loadShopWebComponents()

  const makeCounterWebComponent = require('modules/counter').default

  makeCounterWebComponent()
}

export default initWebComponents
