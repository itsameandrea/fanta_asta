import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _b5c3f888 = () => interopDefault(import('../pages/Auction/index.vue' /* webpackChunkName: "pages/Auction/index" */))
const _e316e166 = () => interopDefault(import('../pages/Dashboard/index.vue' /* webpackChunkName: "pages/Dashboard/index" */))
const _be041746 = () => interopDefault(import('../pages/Leagues/index.vue' /* webpackChunkName: "pages/Leagues/index" */))
const _4d2b4ce2 = () => interopDefault(import('../pages/Login/index.vue' /* webpackChunkName: "pages/Login/index" */))
const _58d533a0 = () => interopDefault(import('../pages/Register/index.vue' /* webpackChunkName: "pages/Register/index" */))
const _474a4de4 = () => interopDefault(import('../pages/Leagues/New/index.vue' /* webpackChunkName: "pages/Leagues/New/index" */))
const _68ef7592 = () => interopDefault(import('../pages/Leagues/_slug/Join/index.vue' /* webpackChunkName: "pages/Leagues/_slug/Join/index" */))
const _7ef4f6a8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/Auction",
      component: _b5c3f888,
      name: "Auction"
    }, {
      path: "/Dashboard",
      component: _e316e166,
      name: "Dashboard"
    }, {
      path: "/Leagues",
      component: _be041746,
      name: "Leagues"
    }, {
      path: "/Login",
      component: _4d2b4ce2,
      name: "Login"
    }, {
      path: "/Register",
      component: _58d533a0,
      name: "Register"
    }, {
      path: "/Leagues/New",
      component: _474a4de4,
      name: "Leagues-New"
    }, {
      path: "/Leagues/:slug/Join",
      component: _68ef7592,
      name: "Leagues-slug-Join"
    }, {
      path: "/",
      component: _7ef4f6a8,
      name: "index"
    }],

    fallback: false
  })
}
