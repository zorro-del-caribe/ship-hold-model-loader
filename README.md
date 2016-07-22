# ship-hold-model-loader

[![CircleCI](https://circleci.com/gh/zorro-del-caribe/ship-hold-models-loader.svg?style=svg)](https://circleci.com/gh/zorro-del-caribe/ship-hold-models-loader)
load ship-hold models based on convention

## install

``npm install ship-hold-model-loader``

## usage

assuming you have

```
.
|
|---models
|     |----Users.js
|     |----Products.js

```

Users.js and Products.js following the regular [ship-hold model definition pattern](https://github.com/zorro-del-caribe/ship-hold#models)

```javascript
module.exports = function (h){
 return {
   table:'users',
   columns:{},
   relations:{}
 };
};
```

then use **ship-hold-models-loader**
 
 ```javascript
 const sh = require('ship-hold')(/* options */)
 const models = require('ship-hold-models-loader')(sh) // can pass options here
 
 models.Products === sh.model('Products'); // true
 
 ```
 
 options to path the factory
 
 * folder: the folder to read through to find the model files (default './models')
 * exclude: an array of file to exclude (default empty array)

