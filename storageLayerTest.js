"use strict";

const {
  getAllFromStorage,
  getOneFromStorage,
  addToStorage,
  updateStorage,
  removeFromStorage,
} = require("./jsonStorage/storageLayer");

// getAllFromStorage().then(console.log).catch(console.log);

// getOneFromStorage(4).then(console.log).catch(console.log);

const emp = {
  id: "5",
  firstname: "Adele",
  lastname: "Jones",
  department: "Designer",
  salary: "5000",
};

// addToStorage(emp).then(console.log).catch(console.log);

// const empToUpdate = {
//   id: 5,
//   firstname: "Simon",
//   lastname: "Jones",
//   department: "Designer",
//   salary: 5000,
// };

// updateStorage(empToUpdate).then(console.log).catch(console.log);

// removeFromStorage(5).then(console.log).catch(console.log);

updateStorage(emp).then(console.log).catch(console.log);
