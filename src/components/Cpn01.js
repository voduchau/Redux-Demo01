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
} from 'react-native';
import { connect } from 'react-redux';
import Cpn02 from './Cpn02';

const Cpn01 = ({myCount}) =>{
    // console.log(myCount,'this is props');
  return (
    <View>
      <Text>this is coun:{myCount} </Text>
      <Cpn02 />
    </View>
  )
}
const mapStateToProps = (state) =>{
    console.log(state,'state');
    return {myCount:state.count};
}

export default connect(mapStateToProps)(Cpn01);