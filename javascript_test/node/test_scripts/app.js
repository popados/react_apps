const request = require('request');
const fs = require('fs');
const readline = require('readline');
const EventEmitter = require('events');
const Person = require('./Person.js');
const Card = require('./Card.js');

const eventEmitter = new EventEmitter();

eventEmitter.on('sum', (num1, num2) => {
  console.log(num1 + num2)
})
console.log("hello");

eventEmitter.emit('sum', 1, 2);

//init the object
let popados = new Person.Person('popados');
let fireball = new Card.Card('fireball');

//create name instance that goes to fireball object and gets name from eventEmitter
fireball.on('name', () => {
  console.log("this card is: " + fireball.name);
})

popados.on('name', ()=> {
  console.log("my name is printed: " + popados.name);
})

//emit the name function
popados.emit('name');
fireball.emit('name');
