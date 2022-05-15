import { StyleSheet, Text, ButtonProps } from 'react-native';
import { Button,Surface } from 'react-native-paper';

const Button22:React.FC<ButtonProps>=({children,onPress,textColor,...props}) =>{
  return (
  <Surface
  style={styles.style}
  >
    <Button 
    {...props}
    mode="contained"
    onPress={onPress}
    labelStyle={{color:textColor,fontSize:20,padding:5}}
    >
    {children}
    </Button>
  </Surface>
  )
}
const styles = StyleSheet.create({
  style:{
    marginTop:10,
    elevation:10
  }
})
export default Button22