const path = require('path');
const fs = require('fs');

function loadCreds() {
  const credsPath = path.resolve(__dirname, 'localcreds.json'); // same folder as this JS file
  const data = fs.readFileSync(credsPath, 'utf-8');
  return JSON.parse(data);
}

module.exports = loadCreds;
