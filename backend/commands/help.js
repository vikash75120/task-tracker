const commands = require('../utils/allCommands.json');

function help() {
    console.log(JSON.stringify(commands, null, 2));
}

module.exports = help;