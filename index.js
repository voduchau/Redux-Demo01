/**
 * @format
 */

 // index -> App -> Cpn01 -> Cpn02
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
      //**chú ý phải set default thì bên components con mới gọi tới state được
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
