import React from "react";
import Generator from "./generator";
import { StyleSheet, Text, View } from 'react-native';

// export default class App extends React.Component{
//   render(){
//   return (
//     <View style={styles.container}>
      
//       <Generator />
//     </View>
//   );
// }
// }
import RandomFact from './fact.js';
 const App = () => { 
  return ( 
 <RandomFact /> 
  ); }; 
  export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

