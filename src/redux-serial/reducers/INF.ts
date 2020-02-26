import { SerialStates } from "../GS";

export const INFReducer = (state :SerialStates, action:any) => {
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
    return state;
  }