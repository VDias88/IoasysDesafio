import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, ActivityIndicator, Image, ScrollView } from 'react-native';
import { observer } from 'mobx-react';
import { View } from '../components/Themed';
import Icon from '../components/buttons/Icon';
import SvgIcon from '../assets/images/back_icon.svg'
import { RootTabScreenProps } from '../types';
import globalStore from '../store/GlobalStore';
import { useEffect } from 'react';
import { ms, s, vs } from 'react-native-size-matters'
import Paragraph28 from '../components/text/Paragraph28';
import Paragraph12 from '../components/text/Paragraph12';
import DescriptionItem from '../components/List/DescriptionItem';
import BookDescription from '../components/text/BookDescription';

const ItemDetails = observer(({navigation}:RootTabScreenProps<'LogIn'>)=> {

  
  useEffect(() => {

  },[])

function onBackPress(){
  navigation.goBack()
}

  return (

    globalStore.isDetailsFetching
    ? (
    <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
      <ActivityIndicator size="large" color="black" style={styles.isFetching}/> 
    </View>
      )
    :(<View style={styles.container}>
      <View style={styles.header}>
        <Icon innerIcon={<SvgIcon />} onPress={onBackPress}/>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
      <View style={styles.detailsHeader}>
          <View style={styles.imageWrapper}>
            {globalStore.currentBookDetails.imageUrl 
            ? <Image source={{uri:globalStore.currentBookDetails?.imageUrl}} style={styles.image}/>
            : <Image source={require('../assets/images/edition_placeholder.png')} style={styles.image}/>}
          </View>
          <View style={styles.descriptionHeader}>
            <Paragraph28>{globalStore?.currentBookDetails?.title}</Paragraph28>
            <Paragraph28 style={styles.author}>{
            globalStore?.currentBookDetails?.authors?.map(e=>(
              `${e}, `
            ))
            }
            </Paragraph28>
          </View>
        </View>
        <View>
          <DescriptionItem 
          pageCount={globalStore?.currentBookDetails?.pageCount}
          publisher={globalStore?.currentBookDetails?.publisher}
          published={globalStore?.currentBookDetails?.published}
          language={globalStore?.currentBookDetails?.language}
          category={globalStore?.currentBookDetails?.category}
          isbn10={globalStore?.currentBookDetails?.isbn10}
          isbn13={globalStore?.currentBookDetails?.isbn13}
          />
        </View>
        <BookDescription 
        description={globalStore?.currentBookDetails?.description}
        />
      </ScrollView>
    </View>)
  );
})
export default ItemDetails
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',

  },
  scrollView:{
    paddingVertical:20
  },
  header:{
    marginTop:20
  },
  author:{
    fontFamily: 'Heebo',
    fontSize:12,
    color:'#AB2680'
  },
  descriptionHeader:{
    backgroundColor:'0000',
    marginTop:10,
    justifyContent:'center',
    alignItems:'center'
  },
  image:{
    width:vs(220),
    height:ms(350),
  },
  detailsHeader:{
    marginTop:15,
    justifyContent:'center',
    alignItems:'center',
  },

  imageWrapper:{
    elevation:20
  },
  isFetching:{
    alignSelf:'center'
  }
});
