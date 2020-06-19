'use strict';

class Warehouse {
  showLoot() {
    const obj = {};
    for (const key in this) {
      if (typeof this[key] === 'object') {
        obj[key] = this[key];
      }
    }
    return obj;
  }
}

class Items extends Warehouse {
  constructor(name, info = {}) {
    super();
    this._name = name;
    this._number = generateNumber();
    this._info = info;
  }
  showLoot() {
    super.showLoot();
  }
  get number() {
    return this.number;
  }
  get info() {
    return this.info.getOwnPropertyNames();
  }
}

class Food extends Items {
  constructor(name, price = 0, quantity = 0, type = 'Food',
    info = {}) {
    super(name, info);
    this._info.price = price;
    this._info.quantity = quantity;
    this._info.type = type;
  }
  set price(value) {
    this._info.price = value;
  }
  set quantity(value) {
    this._info.quantity = value;
  }
}

const warehouse = new Warehouse();

function createInstance(Type, name, number, price, quantity) {
  const instance = new Type(name, number, price, quantity);
  addNew(warehouse, instance);
}

let lastNumber = 0;
function generateNumber() { //number - vendor code
  let zeros = '';
  lastNumber += 1;
  if (lastNumber < 100) {
    if (lastNumber < 10) {
      zeros = '000';
    } else zeros = '00';
  } else zeros = '0';

  return (zeros + lastNumber);
}

function findItemByNumber(obj, num) {
  for (const key in obj) {
    if (obj[key]._number === num) return obj[key];
  }
  return false;
}

function findItemByName(obj, name) {
  for (const key in obj) {
    if (obj[key]._name === name) return obj[key];
  }
  return false;
}

function addNew(obj, addedObj) {
  try {
    const name = addedObj._name;
    if (findItemByName(obj, name) === false) obj[name] = addedObj;
    else {
      lastNumber -= 1;
      throw new Error(`There is such an object with the name ${name}`);
    }
  } catch (error) {
    logMyError(error);
  }
}

const errors = {};
function logMyError(error) {
  errors[lastNumber] = error;
}
