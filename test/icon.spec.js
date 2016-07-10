import test from 'ava'
import Vue from 'vue'
import Icon from '../src'

const jsdom = require('jsdom').jsdom

test('Test setting `width` and `height` is correct', assert => {
  global.document = jsdom(`
  <body>
    <Icon id="foo" typ="about" size="40x80"></Icon>
  </body>  
  `)

  const vm = new Vue({
    el: document.body,
    components: {
      Icon,
    }
  })
  const foo = vm.$el.querySelector('#foo')
  assert.is(foo.getAttribute('width'), '40')
  assert.is(foo.getAttribute('height'), '80')
})


test('Test setting `width` and `height` is correct (pass number)', assert => {
  global.document = jsdom(`
  <body>
    <Icon id="foo" typ="about" :size="40"></Icon>
  </body>  
  `)

  const vm = new Vue({
    el: document.body,
    components: {
      Icon,
    }
  })
  const foo = vm.$el.querySelector('#foo')
  assert.is(foo.getAttribute('width'), '40')
  assert.is(foo.getAttribute('height'), '40')
})
