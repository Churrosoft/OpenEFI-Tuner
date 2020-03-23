import commands from './commands';
const commandHandler = (command, subcommand, payload) => {
    let cmdata = commands[command];
    if(!cmdata){
        console.warn("Comando desconocido recibido:", command, subcommand);
        return;
    }
    let commandName = cmdata.name;
    let subcommandName = null;
    if(subcommand != 0){
        let scmdata = cmdata.subcommands[subcommand];
        if(!scmdata){
            console.warn("Subcomando desconocido recibido:", commandName, subcommand);
            return;
        }
        subcommandName = scmdata.name;
        if(scmdata.handler){
            scmdata.handler({command: commandName, subcommand: subcommandName, payload: payload});
        }
    }
    cmdata.handler({command: commandName, subcommand: subcommandName, payload: payload})
};


export default commandHandler;