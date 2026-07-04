const add = require("./commands/add.js");
const list = require("./commands/list.js");

console.log("Task Tracker Started...");

const command = process.argv[2] || "";
const args = process.argv.slice(3, process.argv.length);


switch (command){
    case 'add':
        console.log(add(args));
        break;
    case "delete":
        console.log("delete command is executing...");
        break;
    case "update":
        console.log("update command is executing...");
        break;
    case "list":
        console.log(list());
        break;
    case "mark-in-progress":
        console.log("mark-in-progress command is executing...");
        break;
    case "mark-done":
        console.log("mark-done command is executing...");
        break;
    case "help":
        console.log("help command is executing...");
        break;
    case "":
        console.log(" ❌ No command found. Please use help to list all the command.");
        console.log("npm start help");
        break;
    default:
        console.log(" ❌ Unknown command");
        break;
}


console.log("...Task tracker exited")