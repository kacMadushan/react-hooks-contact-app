export default function reducer(state, action) {
    switch(action.type) {
        case "ADD":
            return {
                contactList: state.contactList.concat([
                    { id: action.id, name: action.name, number: action.number }
                ])
            }
        default:
            return state    
    }
};