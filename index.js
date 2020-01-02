const https = require('https');

module.exports = class GetPlayers {
  constructor() {
    this.hostname = 'api.opendota.com';
  }

  searchPlayers(query = '') {
    return new Promise((resolve, reject) => https.get({
      hostname: this.hostname,
      method: 'GET',
      path: `/api/search?q=${query}`,
      port: 443,
    }, (response = {}) => {
      let data = '';
      response.setEncoding('utf8');
      response.on('data', (chunk) => data += chunk);
      response.on('end', () => resolve(JSON.parse(data)));
    }).on('error', (error) => reject(error)));
  }
};
