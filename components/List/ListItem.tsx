import { StyleSheet, Text,Pressable, Image, View } from 'react-native';
import { Button,Surface } from 'react-native-paper';
import { BooksProps } from '../../types';

const ListItem:React.FC<BooksProps>=({id,onPress,title,imageUrl,author,pageCount,publisher,published},...props) =>{
  return (
  <Surface
  style={styles.style}
  key={id}
  >
    <Pressable
    onPress={onPress}
    style={styles.card}
    android_ripple={{borderless:true}}
    {...props}
    >   
    <View style={styles.content}>
        <View
        style={styles.imageContainer}>
        {imageUrl
        ? <Image source={{uri:imageUrl}} style={styles.image}/>
        : <Image source={require('../../assets/images/edition_placeholder.png')} style={styles.image}/>
        }
        </View>
        <View style={styles.generalData}>
            <View style={styles.dataContent}>
                <Text style={styles.headerText}>{title}</Text>
                <Text style={styles.authorText}>{author}</Text>
            </View>
            <View style={styles.dataContent}>
                <Text style={styles.authorText}>{pageCount+' páginas'}</Text>
                <Text style={styles.authorText}>{publisher}</Text>
                <Text style={styles.authorText}>{'Publicado em '+published}</Text>
            </View>
        </View>
        </View>
    </Pressable>
  </Surface>
  )
}
const styles = StyleSheet.create({
    content:{
        flexDirection:'row',
        padding:10,
        flex:1
    },
    dataContent:{
        flexDirection:'column',

    },
    style:{
        elevation:10,
        marginHorizontal:20,
        marginVertical:10,
    },
    card:{
        
        flexDirection:'row'    
    },
    headerText:{
        fontSize:14,
        fontWeight:'900'
    },
    authorText:{
        fontSize:14,
        color:'gray'
    },
    imageContainer:{
        margin:5,
        flexBasis:'45%',
        flex:1
    },
    image:{
        height:200,
        width:150,
        borderRadius:5
    },
    generalData:{
        flexDirection:'column',
        alignItems:'flex-start',
        width:'50%',
        justifyContent:'space-around'
    }
})
export default ListItem