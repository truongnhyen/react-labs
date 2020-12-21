import todoReducer from 'features/Todo/reducer';
import { combineReducers } from 'redux';

//Root reducer: dung ham 'combineReducer' de combine nhieu reducer
//todos: la state goi toi feauture reducer khac
const rootReducer = combineReducers({
  todos: todoReducer,
});

export default rootReducer;
