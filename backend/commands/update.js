const { getAllTasks, saveAllTasks } = require("../services/taskService");

module.exports = function update (args) {
    if(args.length === 0) return " ❌ ID Required";
    const id = +args[0];

    const tasks = getAllTasks();
    const targetTask = tasks.find((item)=> item.id === id);

    if(!targetTask) return ` ❌ No entry found with ID: ${args[0]}`

    targetTask.description = args[1];
    saveAllTasks(tasks);

    return " ✅ Task updated successfully";
    
}