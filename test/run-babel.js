const path   = require("path");
const fs     = require("fs");
const assert = require("assert");
const plugin = require("../src/index");
const babel = require('babel-core');


function trim(str) {
  return str.replace(/^\s+|\s+$/, "");
}
const fixtureDir = path.join(__dirname, './fixtures');
//const fixtureDir = path.join(fixturesDir, caseName);
      const actual     = babel.transformFileSync(
        path.join(fixtureDir, "actual.js"), {
          presets: ['es2015', 'react'],
          plugins: [plugin]
        }
      ).code;
      const expected = fs.readFileSync(path.join(fixtureDir, "expected.js")).toString();
