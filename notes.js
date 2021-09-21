const fs = require("fs");
const dataBaseNotes = require("./tasks.json");

const escribirJSON = (title, status) => {
  const arrayTask = {
    title: title,
    status: status,
  };
  const currentDataBase = dataBaseNotes;
  currentDataBase.push(arrayTask);
  const notesJson = JSON.stringify(currentDataBase, null, 4);
  fs.writeFileSync("./tasks.json", notesJson);
};

const list = () => {
  dataBaseNotes.forEach((elemento, contador) => {
    console.log(++contador + ".");
    console.log(elemento);
  });
};

const status = dataBaseNotes.filter((item) => {
  return item.status == "Pendiente"
})

const filterStatus = () => {
  status.forEach((i) => console.log(i.title + ": " + i.status));
};

module.exports = { escribirJSON, list, filterStatus };
