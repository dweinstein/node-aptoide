const co = require('co');
const request = require('co-request');
const debug = require('./debug')('get-apk-info');

module.exports = co.wrap(function* (url, id) {
  const infoUrl = url+'/webservices/3/getApkInfo';
  const form = {
    identif: 'package:'+id,
    mode: 'json'
  };
  debug(form);
  const response = yield request.post(infoUrl, {
    form: form,
    headers: {
      'User-Agent': 'Android'
    }
  });
  return yield JSON.parse(response.body);
});
