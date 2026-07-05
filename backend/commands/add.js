const {getAllTasks, saveAllTasks} = require("../services/taskService.js");
const { isoStringTimesamp } = require("../utils/utils.js");

function add (args){
    if (args.length === 0) return " ❌ Description Required" 
    const tasks = getAllTasks();

    const currentTimpstamp = isoStringTimesamp();
    const newTask = {
        id: Date.now(),
        description: args[0],
        status: "todo",
        createdAt: currentTimpstamp,
        updatedAt: currentTimpstamp
    }

    tasks.push(newTask);
    saveAllTasks(tasks);
    return (" ✅ Task Added Successfully");
}

module.exports = add;