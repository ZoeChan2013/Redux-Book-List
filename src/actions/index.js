export function selectBook(book) {
    //selectBook is an AnctionCreactor, it needs to return an action,
    //an object with a type property.
    return {
        type: 'BOOK_SELECTED', //type is uppercase string
        payload: book
    }
}