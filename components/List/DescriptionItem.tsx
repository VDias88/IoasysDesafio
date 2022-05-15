import { StyleSheet, Text,View } from 'react-native';
import { DescriptionItemProps } from '../../types';
import { observer } from 'mobx-react';
import Paragraph12 from '../text/Paragraph12';
import Paragraph28 from '../text/Paragraph28';
import { vs } from 'react-native-size-matters';
const DescriptionItem:React.FC<DescriptionItemProps>=observer(({
    pageCount,
    publisher,
    published,
    language,
    category,
    isbn10,
    isbn13,
},
    ...props) =>{
  return (
 <View style={styles.container}>
     <View style={styles.detailsTitle}>
         <Paragraph28 style={{fontSize:15}}>Informações</Paragraph28>
     </View>
     <View style={styles.details}>
        <View>
            <Paragraph12 boold>Páginas</Paragraph12>
            <Paragraph12 boold>Editora</Paragraph12>
            <Paragraph12 boold>Publicação</Paragraph12>
            <Paragraph12 boold>Idioma</Paragraph12>
            <Paragraph12 boold>ISBN-10</Paragraph12>
            <Paragraph12 boold>ISBN-13</Paragraph12>
            <Paragraph12 boold>Categoria</Paragraph12>
        </View>
        <View>
            <Paragraph12>{`${pageCount} páginas`}</Paragraph12>
            <Paragraph12>{publisher}</Paragraph12>
            <Paragraph12>{published}</Paragraph12>
            <Paragraph12>{language}</Paragraph12>
            <Paragraph12>{isbn10}</Paragraph12>
            <Paragraph12>{isbn13}</Paragraph12>
            <Paragraph12>{category}</Paragraph12>
        </View>
     </View>

 </View>
  )
})
const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        // backgroundColor:'red',
        // padding:10,
        marginVertical:50,
        paddingHorizontal:50
    },
    detailsTitle:{
        marginBottom:10
    },
    details:{
        flexDirection:'row',
        justifyContent:'space-between',

    }
})
export default DescriptionItem