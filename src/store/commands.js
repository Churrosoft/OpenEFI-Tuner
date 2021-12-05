/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import store from './index';
// Mapeo de comandos y subcomandos a nombres y handlers
// Referencia: commands.h
const commands = {
	1: {
		name: 'PING',
		subcommands: {},
	},
	2: {
		name: 'STATUS',
		subcommands: {
			0: {
				name: 'RESPONSE',
			},
		},
		handler: ({ payload, subcommand }) => console.log('STATUS:', payload),
	},
	9: {
		name: 'ERROR',
		subcommands: {
			1: {
				name: 'INVALID_PROTOCOL',
			},
			2: {
				name: 'INVALID_COMMAND',
			},
			3: {
				name: 'INVALID_CHECKSUM',
			},
		},
		handler: ({ subcommand }) =>
			console.warn('ERROR RECIBIDO DE OPENEFI:', subcommand),
	},
	10: {
		name: 'HELLO',
		handler: ({ payload }) => {
			store.commit('setPaired', {
				major: payload[0],
				minor: payload[1],
				rev: payload[2],
			});
		},
	},
};

export default commands;