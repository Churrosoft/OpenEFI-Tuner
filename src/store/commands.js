import store from './index';
// Mapeo de comandos y subcomandos a nombres y handlers
// Referencia: commands.h
const commands = {
    1: {
        name: 'PING',
        subcommands: {},
    },
    9: {
        name: 'ERROR',
        subcommands: {
            1: {
                name: 'INVALID_PROTOCOL',
            },
            2: {
                name: 'INVALID_COMMAND'
            }
        }
    },
    10: {
        name: 'HELLO',
        handler: ({payload}) => {
            store.commit('setPaired', {major: payload[0], minor: payload[1], rev: payload[2]})
        }
    }
};

export default commands;