const net = require('net');
const { connect } = require('./client.js');

const setupInput = function (callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", callback);

  return stdin;
}

const handleUserInput = function (key) {
  
  if (key === '\u0003') {
    process.exit();
  }

};


console.log(`connecting...`);
connect();
setupInput(handleUserInput);