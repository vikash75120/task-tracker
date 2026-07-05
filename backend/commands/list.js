const {getAllTasks} = require('../services/taskService.js');

function list (args){
    const tasks = getAllTasks();
    if(args[0] === 'done'){
        return tasks.filter(item => item.status === 'done');
    }else if(args[0] === 'todo'){
        return tasks.filter(item => item.status === 'todo');
    }else if(args[0] === 'in-progress'){
        return tasks.filter(item => item.status === 'in-progress');
    }else{
        return tasks;
    }
}

module.exports = list;