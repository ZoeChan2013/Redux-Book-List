//State argument is not application state,
//only the state this reducer is responsiable for.

//This reducer is only called when action gets triggered.
//redux don't allow return undefined, so set state = null.
export default function(state = null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }

    return state;
}