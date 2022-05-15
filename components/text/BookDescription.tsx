import { TextProps, View,StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { observer } from 'mobx-react';
import { BookDescriptionProps } from '../../types';
import Paragraph12 from './Paragraph12';
import { Fontisto } from '@expo/vector-icons';

const BookDescription:React.FC<BookDescriptionProps>=observer(({description},...props:any) =>{
  return (
  <View style={[styles.container,props.style]} >
    <View style={styles.title}>
        <Paragraph12 boold style={{fontSize:15}}>Resenha da editora</Paragraph12>
    </View>
    <View style={styles.descriptionContainer}>
        <Fontisto name='quote-a-right' style={styles.icon} color="gray"/>
        <View >
            <Paragraph12>
                {description}
                <Fontisto name='quote-a-left' color="gray" style={styles.icon}/>
            </Paragraph12>
        </View>
    </View>
  </View>
  );
})
const styles = StyleSheet.create({
    container:{
        // marginVertical:50,
        paddingHorizontal:50
        
    },
    title:{
        paddingVertical:10
    },
    icon:{
        margin:5
    },
    descriptionContainer:{
        flexDirection:'row'
    }
})
export default BookDescription