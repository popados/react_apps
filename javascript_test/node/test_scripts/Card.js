const EventEmitter = require('events');


class Card extends EventEmitter {
  constructor (name) {
    super();
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

module.exports.Card = Card;
