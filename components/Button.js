import React from "react";
import { TouchableOpacity, StyleSheet, Text} from "react-native";

export default ({ onPress, text,theme,orientation,arg,additionalStyle}) => {

    const buttonStylesNormal = orientation ==='portrait' ? [styles.button1] : [styles.button1H];
    const buttonStylesRight = orientation ==='portrait' ? [styles.button2] : [styles.button2H];

    const bStyle= theme==="right" ? buttonStylesRight : buttonStylesNormal
    return (
        <TouchableOpacity onPress={()=>onPress(arg)} style={[bStyle,additionalStyle]}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 28,
        color: '#fff',
    },
    button1:{
        backgroundColor:'#8e8e8e',
        width:'25%',
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderColor:'#373737'
    },
    button2:{
        backgroundColor:'#5c6bc0',
        width:'25%',
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderColor:'#373737'
    },
    button1H:{
        backgroundColor:'#8e8e8e',
        width:'16.666%',
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderColor:'#373737'
    },
    button2H:{
        backgroundColor:'#5c6bc0',
        width:'16.666%',
        justifyContent:'center',
        alignItems:'center',
        borderLeftWidth:1,
        borderTopWidth:1,
        borderColor:'#373737'
    }
})
