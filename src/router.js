import Router from 'vanilla-router'
import { html, render } from 'htm/preact'

const router = new Router({
  mode: 'hash'
})

router.add('', renderHome)
