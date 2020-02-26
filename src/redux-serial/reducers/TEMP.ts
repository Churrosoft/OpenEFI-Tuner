import { SerialStates } from "../GS";

export const TEMPReducer = (state: SerialStates, action: any) => {
    if (parseInt(action.val) < 150 && parseInt(action.val) > -15) {
        console.log({ "NEW TEMP": action.val });
        return {
            ...state,
            cmd: {
                temp: {
                    value: action.val
                }
            }
        };
    }
    return state;
}