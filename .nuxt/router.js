import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c941dad0 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _35b9e226 = () => interopDefault(import('../pages/pr/index.vue' /* webpackChunkName: "pages/pr/index" */))
const _f9b63710 = () => interopDefault(import('../pages/price.vue' /* webpackChunkName: "pages/price" */))
const _5c9120fe = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _c941dad0,
    name: "login"
  }, {
    path: "/pr",
    component: _35b9e226,
    name: "pr"
  }, {
    path: "/price",
    component: _f9b63710,
    name: "price"
  }, {
    path: "/",
    component: _5c9120fe,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
