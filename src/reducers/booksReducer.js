import { ADD_BOOK } from '../actions/booksActions'; 

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_BOOK:
      return [...state, action.payload]; 
    default:
      return state;
  }
}
