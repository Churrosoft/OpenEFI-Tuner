import { createStore } from "redux";
import { SerialStates } from "./GS";


const Commands: SerialStates = {
  rpm: {
    value: 100,
    trigger: "RPM"
  },
  inf: {
    value: "",
    trigger: "INF"
  }
};

const DefaultState: SerialStates = {
  rpm: 0,
  cmd: Commands
};


const RPMReducer = (state :SerialStates, action:any) =>{
  console.log({ "NEW RPM": state.cmd.rpm.value });
  if (parseInt(action.val) > 250) {
    return {
      ...state,
      cmd: {
        rpm: {
          //value: state.cmd.rpm.value + 250
          value: action.val
        }
      }
    };
  }
  return state;
}

const StateReducer = (state = DefaultState, action: any) => {
  switch (action.type) {
  case "RPM":
    return RPMReducer(state,action)
    /*
    case "INF":
      if(action.val !== null || action.val !== undefined || action.val !== ""){
        console.log({ "INF: ": action.val });
        return {
          ...state,
          cmd:{
            inf: {
                value: action.val
            }
          }
        };
      }
    return state;*/

    default:
      console.log({ "Default action": action });
      return state;
  }
};
const mystore = createStore(StateReducer);

export default mystore;
