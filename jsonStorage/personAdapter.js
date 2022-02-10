"use strict";

function adapt(item) {
  console.log("personAdapter");
  return Object.assign(item, {
    id: +item.id,
    salary: +item.salary,
  });
}

// This can be used to update same as employeeAdapter. This is a quicker way of only assigning
// Values that need to change rather than all of them.

// If you want to use this adapter instead you can just change it in the storageConfig as it is referenced there. Makes it a lot easier to hotswap functions

module.exports = { adapt };
