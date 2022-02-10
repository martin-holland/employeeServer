"use strict";

const CODES = {
  PROGRAM_ERROR: 0,
  NOT_FOUND: 1,
  INSERT_OK: 2,
  NOT_INSERTED: 3,
  ALREADY_IN_USE: 4,
  REMOVE_OK: 5,
  NOT_REMOVED: 6,
  UPDATE_OK: 7,
  NOT_UPDATED: 8,
};

const MESSAGES = {
  PROGRAM_ERROR: () => ({
    message: "Sorry! Error in the program",
    code: CODE.PROGRAM_ERROR,
    type: "error",
  }),
  NOT_FOUND: (id) => ({
    message: `No employee found with ${id}`,
    code: CODES.NOT_FOUND,
    type: "error",
  }),
  INSERT_OK: (id) => ({
    message: `Employee ${id} was inserted`,
    code: CODES.INSERT_OK,
    type: "info",
  }),
  NOT_INSERTED: (id) => ({
    message: `Employee ${id} was NOT inserted`,
    code: CODES.NOT_INSERTED,
    type: "error",
  }),
  ALREADY_IN_USE: (id) => ({
    message: `ID ${id} was already in use`,
    code: CODES.ALREADY_IN_USE,
    type: "error",
  }),
  REMOVE_OK: (id) => ({
    message: `Employee ${id} was removed`,
    code: CODES.NOT_REMOVED,
    type: "info",
  }),
  NOT_REMOVED: (id) => ({
    message: `No employee found with id ${id}. Nothing removed.`,
    code: CODES.ALREADY_IN_USE,
    type: "error",
  }),
  UPDATE_OK: (id) => ({
    message: `Employee ${id} was updated.`,
    code: CODES.UPDATE_OK,
    type: "info",
  }),
  NOT_UPDATED: (id) => ({
    message: `Data wasnot updated.`,
    code: CODES.NOT_UPDATED,
    type: "error",
  }),
};

module.exports = { CODES, MESSAGES };
