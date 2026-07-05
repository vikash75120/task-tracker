const { getAllTasks, saveAllTasks } = require("../services/taskService");

module.exports = function markInProgress (args){
    const id = +args[0];

    const tasks = getAllTasks();
    const targetTask = tasks.find(item => item.id === id);

    targetTask.status = 'in-progress';

    saveAllTasks(tasks);
    return ` ✅ ${id} marked as in-progress`;
}