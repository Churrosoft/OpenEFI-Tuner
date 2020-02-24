import { createStore } from "redux";

interface SerialStates{
    [index: string]: any
}

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

const DefaultState:SerialStates = {
  rpm: 0,
  cmd: Commands
}

const StateReducer = (state = DefaultState, action: any) => {
    switch (action.type) {
        case 'RPM':
        console.log({"NEW RPM": state.cmd.rpm.value});
        return {
          ...state, 
              cmd:{
                rpm:{
                  //value: state.cmd.rpm.value + 250
                  value: action.val
                }
              } 
        }
            
    
        default:
            console.log({"Default action": action});
            return state;
    }
}
const mystore = createStore(StateReducer);

export default mystore;