const net = require('net');
const { IP, PORT } = require('./constants.js');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on('connect', () => {
    console.log('Connected!');
  });

  conn.on('data', (data) => {
    console.log('data: ', data);
  });

  conn.on('connect', () => {
    conn.write('Name: ALR');
  });

  // conn.on('connect', () => {
  //   conn.write('Move: up');
  //   setInterval(() => conn.write('Move: up'), 100)
  // });
  
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };