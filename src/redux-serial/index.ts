import { createStore  } from "redux";
import { SerialStates } from "./GS";
import { RPMReducer   } from './reducers/RPM';
import { TEMPReducer  } from './reducers/TEMP';
import { INFReducer   } from './reducers/INF';

const Commands: SerialStates = {
  rpm: {
    value: 100,
    trigger: "RPM"
  },
  inf: {
    value: "",
    trigger: "INF"
  },
  temp: {
    value: 0,
    trigger: "TEMP"
  }
};

const DefaultState: SerialStates = {
  rpm: 0,
  cmd: Commands
};

const StateReducer = (state = DefaultState, action: any) => {
  switch (action.type) {
    case "RPM":
      return RPMReducer(state,action)
    
    case "INF":
      return INFReducer(state,action);
    
    case "TEMP":
      return TEMPReducer(state,action);

    default:
      console.log({ "Default action": action });
      return state;
  }
};
const mystore = createStore(StateReducer);

export default mystore;
