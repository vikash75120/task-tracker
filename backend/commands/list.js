const {getAllTasks} = require('../services/taskService.js');

function list (){
    return getAllTasks();
}

module.exports = list;