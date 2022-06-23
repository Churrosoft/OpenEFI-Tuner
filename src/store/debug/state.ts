export interface IDebugMessage {
  type: 'LOG' | 'INFO' | 'EVENT' | 'ERROR';
  timestamp?: number; // TODO
  msg: string;
}

export interface DebugInterface {
  messages: Array<IDebugMessage> | null;
}

function state(): DebugInterface {
  return {
    messages: null,
  };
}

export default state;
