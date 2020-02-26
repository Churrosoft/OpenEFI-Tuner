import { SerialStates } from "../GS";

 export const RPMReducer = (state :SerialStates, action:any) =>{
    console.log({ "NEW RPM": state.cmd.rpm.value });
    if (parseInt(action.val) > 250) {
      return {
        ...state,
        cmd: {
          rpm: {
            value: action.val
          }
        }
      };
    }
    return state;
  }

export default RPMReducer;