const { getAllTasks, saveAllTasks } = require("../services/taskService");
const { isoStringTimesamp } = require("../utils/utils");

module.exports = function markInProgress (args){
    const id = Number(args[0]);

    const tasks = getAllTasks();
    const targetTask = tasks.find(item => item.id === id);
    if(!targetTask) return ` ❌ No entry found with ID: ${args[0]}`

    targetTask.status = 'in-progress';
    targetTask.updatedAt = isoStringTimesamp();

    saveAllTasks(tasks);
    return ` ✅ ${id} marked as in-progress`;
}