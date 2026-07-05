const { getAllTasks, saveAllTasks } = require("../services/taskService")

module.exports = function deleteTask (args){
    const id = +args[0];
    const tasks = getAllTasks();

    const targetTask = tasks.find(item => item.id === id);
    if(!targetTask) return ` ❌ No entry found with ID: ${args[0]}`
    
    const newTasksData = tasks.filter((item)=> item.id !== id);

    saveAllTasks(newTasksData);
    return "✅ Task deleted successfully"
}