import { StyleSheet, Text,Pressable, Image, View } from 'react-native';
import { Button,Surface } from 'react-native-paper';
import { IconProps } from '../../types';

const Icon:React.FC<IconProps>=({onPress,innerIcon},...props) =>{
  return (
  <Surface
  style={styles.style}
  >
    <Pressable
    onPress={onPress}
    android_ripple={{borderless:true}}
    style={styles.content}
    >   
        <View>
            {innerIcon}
        </View>
    </Pressable>
  </Surface>
  )
}
const styles = StyleSheet.create({
    style:{
        margin:10,
        width:50,
        height:50,
         justifyContent:'center',
         borderRadius:50,
        alignItems:'center'
    },
    content:{
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
})
export default Icon