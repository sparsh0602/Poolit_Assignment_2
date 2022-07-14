
const initialLevelState = [];

 const updateArray = (state = initialLevelState, action) => {
    switch (action.type) {
        case "removeElement": return state.splice(0, state.length);
        case "addElement": return [...state,action.payload]
        default: return state;
    }
}


export default updateArray