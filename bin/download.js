#!/usr/bin/env node
'use strict';

const co = require('co');
const rc = require('../config');
const assert = require('assert');
const debug = require('../debug')('bin');
const getApkInfo = require('../get-apk-info');
const request = require('request');
const fs = require('fs');

co(function*() {
  debug(rc);
  const id = rc.id || (rc._ && rc._[0]);
  const url = rc.url;
  assert(id, 'require app id');
  const info = yield getApkInfo(url, id);
  debug('requesting apk from', info.apk.path);
  const out = rc.o ? fs.createWriteStream(rc.o) : process.stdout;
  const stream = request(info.apk.path, {
    gzip: true, headers: {'User-Agent': ''}
  });
  stream.pipe(out);
  stream.on('end', function () {
    debug('stream ended');
  });
})
  .catch(function (err) {
    console.error(err.stack);
    process.exit(1);
  });
