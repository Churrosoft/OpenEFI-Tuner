import commands from './commands';
const commandHandler = (command, subcommand, payload) => {
    let cmdata = commands[command];
    let commandName = cmdata.name;
    let subcommandName = null;
    if(subcommand != 0){
        subcommandName = cmdata.subcommands[subcommand].name
        if(cmdata.subcommands[subcommand].handler){
            cmdata.subcommands[subcommand].handler({command: commandName, subcommand: subcommandName, payload: payload});
        }
    }
    cmdata.handler({command: commandName, subcommand: subcommandName, payload: payload})
};


export default commandHandler;