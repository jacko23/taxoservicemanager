const proxy = [
    {
      context: '/api',
      target: 'http://192.168.1.10:4200'
    }
  ];
  module.exports = proxy;