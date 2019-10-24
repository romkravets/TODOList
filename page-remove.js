const fs = require('fs');
const minimist = require('minimist');
const argv = process.argv.slice(2);
const pageName = minimist(argv)['_'][0];
const entries = require('./config/entries.json');
const rimraf = require("rimraf");

if (!pageName) {
  throw 'Please provide page name as argument `npm run page:remove [name-of-page]`';
}

if (Object.keys(entries).indexOf(pageName) === -1) {
  throw 'You don\'t have page with provided name';
}

const newEntries = Object.keys(entries).reduce((_entr, _pageName) => {
  if(_pageName !== pageName) {
    _entr[_pageName] = entries[_pageName];
  }
  return _entr;
}, {});
rimraf(`./src/${pageName}`, () => console.log("Remove successfully"));

fs.writeFile(`./config/entries.json`, `${JSON.stringify(newEntries, null, 2)}`, function (err) {
  if (err) throw err;
  console.log('Entries updated.' + '<br/>' + JSON.stringify(newEntries, null, 2));
});



