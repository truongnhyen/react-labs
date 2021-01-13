import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from 'app/store';

import './i18n';
import NotFound from 'components/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Redirect exact from="/" to="/en" />

            <Route path="/:lng" component={App} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// TODO: remove after testing

//setup reducer
// const initialState = {
//   list: [{ id: 1, title: 'Learning' }],
//   filters: {},
// };
// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'todo/add': {
//       const newList = [...state.list];
//       newList.push(action.payload);
//       return {
//         //return kieu du lieu dua vao kieu du lieu cua state ban dau
//         ...state,
//         list: newList,
//       };
//     }

//     case 'todo/remove': {
//       return {
//         ...state,
//         list: state.list.filter((x) => x.id !== action.payload),
//       };
//     }

//     default:
//       return state;
//   }
// };
// //setup store
// const store = createStore(todoReducer);
// console.log('Init store successfully', store.getState());

// //khi state thay doi se goi toi ham nay
// store.subscribe(() => console.log(store.getState())); // lay gia tri state hien tai cua store

// const addTodo = (newTodo) => ({
//   type: 'todo/add',
//   payload: newTodo,
// });
// //Fake dispatching actions
// const addAction = addTodo({
//   id: 2,
//   title: 'Traveling',
// });
// store.dispatch(addAction);

// store.dispatch({
//   type: 'todo/add',
//   payload: {
//     id: 3,
//     title: 'Reading',
//   },
// });

// store.dispatch({
//   type: 'todo/remove',
//   payload: 2,
// });
