"use strict";

function adapt(object) {
  return {
    id: +object.id,
    firstname: object.firstname,
    lastname: object.lastname,
    department: object.department,
    salary: +object.salary,
  };
}

module.exports = { adapt };
