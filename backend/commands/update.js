const { getAllTasks, saveAllTasks } = require("../services/taskService");
const { isoStringTimesamp } = require("../utils/utils");

module.exports = function update (args) {
    if(args.length <= 1) return " ❌ ID and descriptions are required";
    const id = Number(args[0]);

    const tasks = getAllTasks();
    const targetTask = tasks.find((item)=> item.id === id);

    if(!targetTask) return ` ❌ No entry found with ID: ${args[0]}`

    targetTask.description = args[1];
    targetTask.updatedAt = isoStringTimesamp();
    saveAllTasks(tasks);

    return " ✅ Task updated successfully";
    
}