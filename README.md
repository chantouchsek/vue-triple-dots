# Vue Triple Dots
> Vue js component for showing html element with dot dot dot (...)

[![Latest Version on NPM](https://img.shields.io/npm/v/vue-triple-dots.svg?style=flat-square)](https://npmjs.com/package/vue-triple-dots)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![npm](https://img.shields.io/npm/dt/vue-triple-dots.svg?style=flat-square)](https://npmjs.com/package/vue-triple-dots)
[![npm](https://img.shields.io/npm/dm/vue-triple-dots.svg?style=flat-square)](https://npmjs.com/package/vue-triple-dots)

## Demo

- https://vue-triple-dots.chantouch.me/

## Setup


#### NPM
```bash
npm install --save vue-triple-dots
```

#### Yarn
```bash
yarn add vue-triple-dots
```

Add dependencies to your `main.js`:

```javascript
import Vue           from 'vue'
import VueTripleDots from 'vue-triple-dots'

/*
or for SSR:
import VueTripleDots from 'vue-triple-dots/dist/ssr.js'
*/

Vue.use(VueTripleDots)
```

### Note that all props are optional.

| Name             | Type          | Default            | Description                                                  |
| ---------------- | ------------- | ------------------ | ------------------------------------------------------------ |
| tag         | String  | 'div'        | The element will render.          |
| ellipsis         | String  | '...'        | 3 dots will show when text has more.          |
| callback         | Function  | undefined        |           |
| truncate         | string  | undefined        |           |
| tolerance         | number  | undefined        |           |
| keep         | string  | null        |           |
| watch         | string  | undefined        |           |
| height         | number  | undefined        |           |
| readLessKey         | string  | readLess        |           |
| readMoreKey         | string  | readMore        |           |


## FAQ

Check closed issues with `FAQ` label to get answers for most asked questions.

## Development

To contribute to the library:

```bash
# build main library
npm install
npm run build
```
