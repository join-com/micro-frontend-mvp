import canUseDom from './canUseDom'

const SHOP_SERVICE_BASE_URL = 'http://localhost:3001'

const load = () => System.import(`${SHOP_SERVICE_BASE_URL}/index.js`)

const loadShopWebComponents = () => {
  const Eev = require('eev')
  const eev = new Eev()

  load().then(({ init }) => {
    init({ eev })
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
