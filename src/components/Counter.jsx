import {useReducer} from "react";
import {initState, reducer} from "../reducers/reducer";

export const Counter = ({initialCount}) => {
    const [state, dispatch] = useReducer(reducer, initialCount, initState);

    return (
    <>
        Count: {state.count}
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'reset', payload: initialCount})}>reset</button>
    </>
)
}
