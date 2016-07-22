const fs = require('fs');
const path = require('path');
const appRoot = require('app-root-path');

module.exports = function (sh, options = {}) {
  const opts = Object.assign({folder: './models', exclude: []}, options);
  const folderPath = path.join(appRoot.toString(), opts.folder);

  const configFiles = fs.readdirSync(folderPath)
    .filter(f=>opts.exclude.indexOf(f) === -1);

  const models = {};

  for (const file of configFiles) {
    const [name,extension] = file.split('.');
    const def = require(path.join(folderPath, file));
    models[name] = sh.model(name, def);
  }
  return models;
};