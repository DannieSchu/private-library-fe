import { ADD_BOOK, SET_BOOKS } from '../actions/booksActions'; 

export default function reducer(state = [], action) {
  switch(action.type) {
    case ADD_BOOK:
      return [...state, action.payload]; 
    case SET_BOOKS:
      return action.payload;
    default:
      return state;
  }
}
