const add = require("./commands/add.js");
const deleteTask = require("./commands/deleteTask.js");
const help = require("./commands/help.js");
const list = require("./commands/list.js");
const markAsDone = require("./commands/markAsDone.js");
const markAsTodo = require("./commands/markAsTodo.js");
const markInProgress = require("./commands/markInProgress.js");
const update = require("./commands/update.js");

console.log("Task Tracker Started...");

const command = process.argv[2] || "";
const args = process.argv.slice(3, process.argv.length);


switch (command){
    case 'add':
        console.log(add(args));
        break;
    case "delete":
        console.log(deleteTask(args));
        break;
    case "update":
        console.log(update(args));
        break;
    case "list":
        const tasks = list(args)
        if(tasks.length === 0)console.log(" 🔵 No tasks available for rquested status");
        else console.log(tasks);
        break;
    case "mark-in-progress":
        console.log(markInProgress(args));
        break;
    case "mark-done":
        console.log(markAsDone(args));
        break;
    case "mark-todo":
        console.log(markAsTodo(args));
        break;
    case "help":
        // console.log("help command is executing...");
        help();
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