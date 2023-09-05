
const readline = require("readline");
const colors = require("colors");
const { resolve } = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const tasks = [];

async function displayMenu() {
  
  console.log("\nMenu:");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Completar tarea");
  console.log("4. Salir");

  const option = await askQuestion ("Seleccione una opción: ");
    switch (option) {
      case "1":
        await addTask();
        break;
      case "2":
        deleteTask();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        rl.close();
        break;
      default:
        console.log("Opción inválida.".red);
        displayMenu();
    }
  }

  async function askQuestion(question) {
    return new Promise ((resolve)=> {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }


  function addTask() {
    return new Promise((resolve, reject) => {
    rl.question("Indicador: ", (indicator) => {
      rl.question("Descripción: ", (description) => {
        tasks.push({
          indicator,
          description,
          completed: false,
        });
        console.log("Tarea agregada.".green);
        resolve();
      });
    });  
    });
    
  }

  function deleteTask() {
    if (tasks.length === 0) {
      console.log("No hay tareas para eliminar.".red);
      displayMenu();
      return;
    }

    console.log("Lista de tareas:");
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. [${task.completed ? "X".yellow : " "}] ${
          task.indicator
        }  ${task.description}`
      );
    });

    rl.question(
      "Ingrese el número de la tarea a eliminar: ".green,
      (answer) => {
        const taskIndex = parseInt(answer) - 1;
        if (taskIndex >= 0 && taskIndex < tasks.length) {
          tasks.splice(taskIndex, 1);
          console.log("Tarea eliminada.".green);
        } else {
          console.log("Número de tarea inválido.".red);
        }
        displayMenu();
      }
    );
  }

  function completeTask() {
    if (tasks.length === 0) {
      console.log("No hay tareas para completar.".red);
      displayMenu();
      return;
    }

    console.log("Lista de tareas:");
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}[${task.completed ? "X" : " "}] ${task.indicator}  ${
          task.description}`
      );
    });

    rl.question(
      "Ingrese el número de la tarea completada: ".green,
      (answer) => {
        const taskIndex = parseInt(answer) - 1;
        if (taskIndex >= 0 && taskIndex < tasks.length) {
          tasks[taskIndex].completed = true;
          console.log("Tarea completada.".green);
        } else {
          console.log("Número de tarea inválido.".red);
        }
        displayMenu();
      }
    );
  }
  module.exports = {
    displayMenu,
  };

  
