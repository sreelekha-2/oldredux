import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { Provider } from 'react-redux';
import fetchData from './thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState={count:0,postData:[]}

function reducer(state=initialState,actions){
  console.log(state)

  switch(actions.type){
    case "INC":
      return {count:state.count+actions.payload}

    case "DEC":
      return {count:state.count-actions.payload}
    case "postdata":
        return {...state,postData:actions.payload}
     default:return state 
  }
 
}
// const logger=store=>next=>action=>{
//   console.log("action",action)
//   action.payload=3
//   next(action)
// }

const store=createStore(reducer,applyMiddleware(thunk))
store.dispatch(fetchData())
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
