const { getAllTasks, saveAllTasks } = require("../services/taskService");
const { isoStringTimesamp } = require("../utils/utils");

module.exports = function markAsDone (args){
    const id = Number(args[0]);

    const tasks = getAllTasks();
    const targetTask = tasks.find(item => item.id === id);

    targetTask.status = 'done';
    targetTask.updatedAt = isoStringTimesamp();

    saveAllTasks(tasks);
    return ` ✅ ${id} marked as done`;
}