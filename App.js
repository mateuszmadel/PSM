import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Button from "./components/Button";
import { factorial } from 'mathjs'
let firstNumber='';
let secondNumber='';
let operation='';


export default function App() {
    const isPortrait = () => {
        const dim = Dimensions.get('window');
        return dim.height >= dim.width;
    };
  const [display, setDisplay] = useState('0');
  const [orientation,setOrientation]=useState(isPortrait() ? 'portrait' : 'landscape')

    const handleAC = () => {
        firstNumber=''
        operation=''
        secondNumber=''
        setDisplay('0')
    }
    const handleEquals = () =>{
        if(secondNumber!=='') {
            calculate('')
            setDisplay(firstNumber + operation + secondNumber)
        }
    }
  const handleNumber = (n) => {
        if (operation === '')
          firstNumber+=n
        else
          secondNumber+=n
      console.log(firstNumber)
      setDisplay(firstNumber+operation+secondNumber)
  }
  const handleDot = () =>{
        if(firstNumber !=='' && operation==='' && !(firstNumber.includes('.')))
            firstNumber+='.'
        else if(secondNumber!=='' && !(secondNumber.includes('.')))
            secondNumber+='.'
        setDisplay(firstNumber+operation+secondNumber)
  }
    const handleOperation = (op) =>{
        if(operation==='' && firstNumber!=='')
            operation=op;
        else if(firstNumber!==''&& secondNumber!=='')
            calculate(op)
        setDisplay(firstNumber+operation+secondNumber)
    }
    const handleOneArgOp = (op)=>{
        let result
        if(operation==='' && firstNumber!=='' && op!=="pi"&& op!=="e"){
            switch(op){
                case "sqrt":
                    if(parseFloat(firstNumber)>0 )
                    result = Math.sqrt(parseFloat(firstNumber));
                    else
                        return
                    break;
                case "!":
                    if(parseFloat(firstNumber)>0 && Number.isInteger(parseFloat(firstNumber)))
                    result = factorial(parseFloat(firstNumber));
                    else
                        return
                    break;
                case "ex":
                    result = Math.exp(parseFloat(firstNumber));
                    break;
                case "10x":
                    result = Math.pow(10,parseFloat(firstNumber));
                    break;
                case "ln":
                    result = Math.log(parseFloat(firstNumber));
                    break;
                case "log10":
                    result = Math.log10(parseFloat(firstNumber));
                    break;
                case "x2":
                    result = Math.pow(parseFloat(firstNumber),2);
                    break;
                case "x3":
                    result = Math.pow(parseFloat(firstNumber),3);
                    break;
            }
            firstNumber=result.toFixed(3).toString()
            operation=''
            secondNumber=''
            setDisplay(firstNumber+operation+secondNumber)
        }
        else if(op==="pi" || op==="e"){
            switch(op){
                case "pi":
                    result = Math.PI;
                    break;
                case "e":
                    result = Math.exp(1);
                    break;
            }
            firstNumber=result.toFixed(3).toString()
            operation=''
            secondNumber=''
            setDisplay(firstNumber+operation+secondNumber)
        }


    }
    const handlePercent = () => {
        if (secondNumber !=='' &&(operation === "*" || operation === "/")) {
            secondNumber= (parseFloat(secondNumber) / 100).toString();
            calculate('')
            setDisplay(firstNumber+operation+secondNumber)
        } else if(secondNumber !==''){
            secondNumber = (parseFloat(firstNumber) * parseFloat(secondNumber) / 100).toString();
            calculate('')
            setDisplay(firstNumber+operation+secondNumber)
        }


    }
    const changeSign = ()=>{
      if(operation===''&& firstNumber!=='')
          firstNumber=(parseFloat(firstNumber)*-1).toString()
            setDisplay(firstNumber+operation+secondNumber)
    }
  const calculate =(op) =>{
      let result;
      switch (operation){
          case "+":
              result = parseFloat(firstNumber)+parseFloat(secondNumber);
              break;
          case "-":
              result = parseFloat(firstNumber)-parseFloat(secondNumber);
              break;
          case "*":
              result = parseFloat(firstNumber)*parseFloat(secondNumber);
              break;
          case "/":
              if( parseFloat(secondNumber)!==0)
                  result = parseFloat(firstNumber)/parseFloat(secondNumber);
              else {
                  firstNumber = '0'
                  operation = ''
                  secondNumber = ''
                  return
              }
              break;
      }
      firstNumber=result.toString()
      operation=op
      secondNumber=''

  }

    Dimensions.addEventListener('change', () => {
        setOrientation(isPortrait() ? 'portrait' : 'landscape')
    });

    const buttons =[{text:'√x', onPress:handleOneArgOp,arg:'sqrt',horizontalOnly:true,theme:"normal"},{text:'x!', onPress:handleOneArgOp,arg:'!',horizontalOnly:true},
        {text:'AC', onPress:handleAC},{text:'',onPress:()=>{return},portraitOnly:true,additionalStyle:{width:'50%'}}, {text:'%', onPress:handlePercent,horizontalOnly:true},{text:'+/-', onPress:changeSign,horizontalOnly:true},
     {text:'/', onPress:handleOperation,arg:'/',theme:"right"},{text:'e^x', onPress:handleOneArgOp,arg:'ex',horizontalOnly:true},{text:'10^x', onPress:handleOneArgOp,arg:'10x',horizontalOnly:true},
    {text:'7', onPress:handleNumber,arg:'7'},{text:'8', onPress:handleNumber,arg:'8'},{text:'9', onPress:handleNumber,arg:9},{text:'x', onPress:handleOperation,arg:'*',theme:"right"},
      {text:'ln', onPress:handleOneArgOp,arg:'ln',horizontalOnly:true},{text:'log10', onPress:handleOneArgOp,arg:'log10',horizontalOnly:true},
     {text:'4', onPress:handleNumber,arg:'4'},{text:'5', onPress:handleNumber,arg:'5'},{text:'6', onPress:handleNumber,arg:'6'},{text:'-', onPress:handleOperation,arg:'-',theme:"right"},
     {text:'e', onPress:handleOneArgOp,arg:'e',horizontalOnly:true},{text:'x^2', onPress:handleOneArgOp,arg:'x2',horizontalOnly:true},
     {text:'1', onPress:handleNumber,arg:'1'},{text:'2', onPress:handleNumber,arg:'2'},{text:'3', onPress:handleNumber,arg:'3'},{text:'+', onPress:handleOperation,arg:'+',theme:"right"},
     {text:'π', onPress:handleOneArgOp,arg:'pi',horizontalOnly:true},{text:'x^3', onPress:handleOneArgOp,arg:'x3',horizontalOnly:true},
     {text:'0', onPress:handleNumber,arg:'0',additionalStyle:{flex:2}},{text:',', onPress:handleDot},{text:'=', onPress:handleEquals,theme:"right"}]

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
