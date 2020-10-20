import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [display, setDisplay] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.display}><Text style={styles.displayText}>{display}</Text></View>
      <TouchableOpacity style={styles.button1}><Text style={styles.text}>AC</Text></TouchableOpacity>
      <View style={styles.empty}></View>
      <TouchableOpacity style={styles.button2}><Text style={styles.text}>/</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button1}><Text style={styles.text}>7</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button1}><Text style={styles.text}>8</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button1}><Text style={styles.text}>9</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button2}><Text style={styles.text}>x</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button1}><Text style={styles.text}>4</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button1}><Text style={styles.text}>5</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button1}><Text style={styles.text}>6</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button2}><Text style={styles.text}>-</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button1}><Text style={styles.text}>1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button1}><Text style={styles.text}>2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button1}><Text style={styles.text}>3</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button2}><Text style={styles.text}>+</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.button1,styles.b0]}><Text style={styles.text}>0</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button1}><Text style={styles.text}>,</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button2}><Text style={styles.text}>=</Text></TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#373737',
    flexDirection:'row',
    flexWrap:'wrap',
    alignContent:'stretch'
  },
  display:{
    paddingVertical:30,
    paddingHorizontal:20,
    width:'100%',
    justifyContent: 'center',
    alignItems:'flex-end',

  },
  button1:{
    padding:20,
    backgroundColor:'#8e8e8e',
    width:'25%',
    justifyContent:'center',
    alignItems:'center',
    borderLeftWidth:1,
    borderTopWidth:1,
    borderColor:'#373737'
  },
  button2:{
    padding:20,
    backgroundColor:'#5c6bc0',
    width:'25%',
    justifyContent:'center',
    alignItems:'center',
    borderLeftWidth:1,
    borderTopWidth:1,
    borderColor:'#373737'
  },
  displayText:{
      fontSize:64,
      color:'#fff',
  },
  text:{
    fontSize:28,
    color:'#fff',
  },
  empty:{
    borderLeftWidth:1,
    borderTopWidth:1,
    borderColor:'#373737',
    width:'50%',
    backgroundColor:'#8e8e8e',
  },
  b0:{
    flex:2
  }

});
