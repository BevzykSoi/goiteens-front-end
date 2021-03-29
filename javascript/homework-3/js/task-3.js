'use strict'

const findBestEmployee = function (employees) {
  let keys = Object.keys(employees);
  let values = Object.values(employees);
  let maxNumber = Math.max(...values);
  for (let index = 0; index < values.length; index++) {
    const element = keys[index];
    if (values[index] === maxNumber) {
      console.log(element);
    }
  }
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux