[![version](https://img.shields.io/npm/v/vue-ss.svg?label=version)](https://www.npmjs.org/package/vue-ss) [![Build Status](https://img.shields.io/travis/rwu823/vue-ss.svg?branch=master)](https://travis-ci.org/rwu823/vue-ss/) [![Coverage](https://img.shields.io/coveralls/rwu823/vue-ss.svg)](https://coveralls.io/github/rwu823/vue-ss)

# vue-ss
SVG sprites Component for `<symbol>` id, it is based on VueJS



## Install

```sh
npm i --save vue-ss
```

## Usage

```javascript
// app.vue
<template>
  <Icon typ="add" size="32x32"></Icon>  
</template>

<script>
import Icon from 'vue-ss'
module.exports = {
  components: {
    Icon
  }
}
</script>
```



## Props

```javascript
props: {
  size: {
    type: [String, Number],
    default: '20x20'
  },

  typ: {
    type: String,
    required: true,
    default: 'add',
  }
},
```



## Colorize

The component exports as standrad `<svg>` tag, you can thro `fill` attribute to colorize it free

```javascript
<Icon fill="#f00"></Icon>
```