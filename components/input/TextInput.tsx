
import { TextInput } from 'react-native-paper'
import { StyleSheet,TouchableHighlight, View } from 'react-native'
import { observer } from 'mobx-react'
import { TextInputProps } from '../../types'
const TextInput24 = observer(({label, right, secureTextEntry, onRightPress,iconName,...props}:TextInputProps) =>{
  return (
  <TextInput
    style={[props.style,styles.style]} 
    label={label}
    mode='flat'
    selectionColor='white'
    secureTextEntry={secureTextEntry}
    theme={{colors:{text:'white'}}}
    {...props}
    right={right&&
        <TextInput.Icon 
        name={iconName}
        onPress={onRightPress}
        />
    }
/>
  )
})
const styles = StyleSheet.create({
    style:{
        margin:10,
        backgroundColor:'#00000052',
        borderRadius:5,
    },
    textInput:{
        justifyContent:'flex-start',
    }
})
export default TextInput24