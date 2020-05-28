const { DataStore } = require("notarealdb");

const store = new DataStore("./server/sample_data");

module.exports = {
  students: store.collection("students"),
  colleges: store.collection("colleges"),
};
