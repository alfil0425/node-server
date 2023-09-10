require ("colors");
const { displayMenu } = require("./task");
const readline = require ("readline");


console.clear();


async function main() {
  console.log("¡Bienvenido a la lista de tareas!");
  await displayMenu();
}


/*function main() {
  console.log("¡Bienvenido a la lista de tareas!".yellow);
  displayMenu().then(() => {
    
  });
}*/




/*const main = async() => {

  displayMenu() 
}*/

main();