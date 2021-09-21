const task = require("./tasks.json");
const functions = require("./notes");

const opciones = process.argv[2];

switch (opciones) {
  case "listar":
    functions.list();
    break;
  case "crear":
    const title = process.argv[3];
    functions.escribirJSON(title, "Pendiente");
    console.log(task);
    break;
  case "filtrar":
    functions.filterStatus("Pendiente");
    break;
  case undefined:
    console.log("Atención - Tienes que pasar una acción.");
    break;
  default:
    console.log("No entiendo qué quieres hacer.");
    break;
}
