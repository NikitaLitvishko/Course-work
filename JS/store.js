'use strict';

class Items {
  constructor(name, info = {}) {
    this._name = name;
    this._number = generateNumber();
    this._info = info;
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

const warehouse = {
};
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
  console.log('any');
}

function addNew(obj, addedObj) {
  obj[addedObj._name] = {};
  for (const key in addedObj) {
    const l = key;
    obj[addedObj._name][l] = addedObj[key];
  }
}

function showWarehouse() {
  const obj = {};
  for (const key in warehouse) {
    if (typeof warehouse[key] === 'object') {
      obj[key] = warehouse[key];
    }
  }
  return obj;
}


