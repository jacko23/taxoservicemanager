const proxy = [
    {
      target: 'http://taxoservice.sytes.net:4200',
      "secure" : false,
       "logLevel" : "debug", // Making Debug Logs in console
      "changeOrigin": true
    }
  ];
  module.exports = proxy;