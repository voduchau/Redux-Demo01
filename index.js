/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';


const initialState={count:0}
const reducer =(state=initialState,action)=>{
  switch (action.type) {
    case 'tang':
      return {...state,count:state.count+1};
    case 'giam':
      return  {...state,count:state.count-1};
    default:
      return state;
  }
}
const store=createStore(reducer);

const index=()=>{
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => index);
