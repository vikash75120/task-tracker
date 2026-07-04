const fs = require('fs');

function getAllTasks (){
    const jsonTasks = fs.readFileSync("./db/tasks.json", "utf8");
    const tasks = JSON.parse(jsonTasks);
    return tasks;
}

function saveAllTasks(tasks){
    const jsonTasks = JSON.stringify(tasks, null, 2);
    fs.writeFileSync("./db/tasks.json", jsonTasks, (err)=>{
        if(err) throw err;
    })
}

module.exports = {getAllTasks, saveAllTasks}

