/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

const Cpn02 = ({dispatch}) =>{
  return (
    <View style={{fontSize:20}}>
      <Button onPress={()=>{dispatch({type:'tang'}) }} title='+' />
      <Button onPress={()=>{dispatch({type:'giam'}) }} title='-' />
    </View>
  )


}

export default connect()(Cpn02);