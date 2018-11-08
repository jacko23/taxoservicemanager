const proxy = [
    {
      target: 'http://192.168.1.10:4200',
      "secure" : false,
       "logLevel" : "debug", // Making Debug Logs in console
      "changeOrigin": true
    }
  ];
  module.exports = proxy;