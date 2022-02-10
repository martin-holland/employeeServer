"use strict";

const path = require("path");

const { readStorage, writeStorage } = require("./readerWriter");

const { storageFile, adapterFile } = require("./storageConfig.json");

const { adapt } = require(path.join(__dirname, adapterFile));

const storageFilePath = path.join(__dirname, storageFile);

async function getAllFromStorage() {
  return readStorage(storageFilePath);
}

async function getOneFromStorage(id) {
  const storage = await readStorage(storageFilePath);
  return storage.find((item) => item.id == id) || null;
  //   return (await readStorage(storageFilePath)).find(item => item.id == id) // One liner for the above
}

async function addToStorage(newObject) {
  const storage = await readStorage(storageFilePath);
  storage.push(adapt(newObject));
  return await writeStorage(storageFilePath, storage);
}

async function updateStorage(updatedObject) {
  const storage = await readStorage(storageFilePath);
  const oldObject = storage.find((item) => item.id == updatedObject.id);
  if (oldObject) {
    Object.assign(oldObject, adapt(updatedObject));
    return await writeStorage(storageFilePath, storage);
  }
  return false;
}

async function removeFromStorage(id) {
  const storage = await readStorage(storageFilePath);
  const toRemove = storage.findIndex((item) => item.id == id);
  if (toRemove < 0) return false;
  storage.splice(toRemove, 1);
  return await writeStorage(storageFilePath, storage);
}

module.exports = {
  getAllFromStorage,
  getOneFromStorage,
  addToStorage,
  updateStorage,
  removeFromStorage,
};
