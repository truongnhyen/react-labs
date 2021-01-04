import cartReducer from 'features/Cart/cartSlice';
import counterReducer from 'features/Counter/counterSlice';
import studentReducer from 'features/Student/reducer';
import rtkStudentsReducer from 'features/Student/studentSlice';
import todoReducer from 'features/Todo/reducer';

//Root reducer: dung ham 'combineReducer' de combine nhieu reducer
//todos: la state goi toi feauture reducer khac
const rootReducer = {
  todos: todoReducer,
  students: studentReducer,
  rtkStudents: rtkStudentsReducer,
  counter: counterReducer,
  cart: cartReducer,
};

export default rootReducer;
