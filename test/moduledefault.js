'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('Ngninja:generators/moduledefault', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/moduledefault'))
      .withArguments('name')
      .withOptions({ skipInstall: true, force: true })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'somefile.js'
    ]);
  });
});
