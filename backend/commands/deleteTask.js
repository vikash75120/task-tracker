const { getAllTasks, saveAllTasks } = require("../services/taskService")

module.exports = function deleteTask (args){
    const id = Number(args[0]);
    const tasks = getAllTasks();

    if(Number.isNaN(id)) return " ❌ id should be only contain number";
    const targetTask = tasks.find(item => item.id === id);
    if(!targetTask) return ` ❌ No entry found with ID: ${args[0]}`
    
    const newTasksData = tasks.filter((item)=> item.id !== id);

    saveAllTasks(newTasksData);
    return "✅ Task deleted successfully"
}