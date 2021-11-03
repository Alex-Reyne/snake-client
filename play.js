const net = require('net');
const { setupInput } = require('./input.js')
const { connect } = require('./client.js');

console.log(`connecting...`);


setupInput(connect());