const { getAllTasks, saveAllTasks } = require("../services/taskService");

module.exports = function markAsDone (args){
    const id = +args[0];

    const tasks = getAllTasks();
    const targetTask = tasks.find(item => item.id === id);

    targetTask.status = 'done';

    saveAllTasks(tasks);
    return ` ✅ ${id} marked as done`;
}