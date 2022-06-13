export const initState = initialCount => ({count: initialCount})

export const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        case 'reset':
            return initState(action.payload);
        default:
            throw new Error();
    }
}
