import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Button from "./components/Button";
import { evaluate } from 'mathjs'

export default function App() {
    const isPortrait = () => {
        const dim = Dimensions.get('window');
        return dim.height >= dim.width;
    };
  const [display, setDisplay] = useState('0');
  const [orientation,setOrientation]=useState(isPortrait() ? 'portrait' : 'landscape')

    const handleAC = () => {
        setDisplay('0')
    }
    const handleEquals = () =>{
      try {

          setDisplay(evaluate(display).toString())
      }catch (e) {
          setDisplay('Error:'+e.message)
      }
    }
  const handleDot = () =>{
        if(!isNaN(parseFloat(display.slice(-1))))
        setDisplay(display+'.')
  }
    const handleOperation = (op) =>{
      if(display!=='') {
          if (display.startsWith('Error:') || display[0] === '0') {
              setDisplay(op)
              return
          }
      }
      setDisplay(display+op)
    }
    Dimensions.addEventListener('change', () => {
        setOrientation(isPortrait() ? 'portrait' : 'landscape')
    });

    const buttons =[{text:'√x', onPress:handleOperation,arg:'sqrt(',horizontalOnly:true,theme:"normal"},{text:'x!', onPress:handleOperation,arg:'!',horizontalOnly:true},
        {text:'AC', onPress:handleAC},{text:'',onPress:()=>{return},portraitOnly:true,additionalStyle:{width:'50%'}}, {text:'(', onPress:handleOperation,arg:'(',horizontalOnly:true},{text:')', onPress:handleOperation,arg:')',horizontalOnly:true},
     {text:'/', onPress:handleOperation,arg:'/',theme:"right"},{text:'e^x', onPress:handleOperation,arg:'e^',horizontalOnly:true},{text:'10^x', onPress:handleOperation,arg:'10^',horizontalOnly:true},
    {text:'7', onPress:handleOperation,arg:'7'},{text:'8', onPress:handleOperation,arg:'8'},{text:'9', onPress:handleOperation,arg:9},{text:'x', onPress:handleOperation,arg:'*',theme:"right"},
      {text:'ln', onPress:handleOperation,arg:'log(',horizontalOnly:true},{text:'log10', onPress:handleOperation,arg:'log10(',horizontalOnly:true},
     {text:'4', onPress:handleOperation,arg:'4'},{text:'5', onPress:handleOperation,arg:'5'},{text:'6', onPress:handleOperation,arg:'6'},{text:'-', onPress:handleOperation,arg:'-',theme:"right"},
     {text:'e', onPress:handleOperation,arg:'e',horizontalOnly:true},{text:'x^2', onPress:handleOperation,arg:'^2',horizontalOnly:true},
     {text:'1', onPress:handleOperation,arg:'1'},{text:'2', onPress:handleOperation,arg:'2'},{text:'3', onPress:handleOperation,arg:'3'},{text:'+', onPress:handleOperation,arg:'+',theme:"right"},
     {text:'π', onPress:handleOperation,arg:'pi',horizontalOnly:true},{text:'x^3', onPress:handleOperation,arg:'^3',horizontalOnly:true},
     {text:'0', onPress:handleOperation,arg:'0',additionalStyle:{flex:2}},{text:',', onPress:handleDot},{text:'=', onPress:handleEquals,theme:"right"}]

    return (
        <View style={styles.container}>
            <View style={styles.display}><Text style={styles.displayText}>{display}</Text></View>
            {
                buttons.filter((el)=>{return orientation==='portrait' ? !('horizontalOnly' in el) : !('portraitOnly' in el) })
                    .map((el) => (
                        <Button onPress={el.onPress} key={el.text} text={el.text} arg={el.arg} theme={el.theme} additionalStyle={el.additionalStyle} orientation={orientation} />
                    ))}
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
  displayText:{
      fontSize:64,
      color:'#fff',
  },
  empty:{
    borderLeftWidth:1,
    borderTopWidth:1,
    borderColor:'#373737',
    width:'50%',
    backgroundColor:'#8e8e8e',
  },
});
