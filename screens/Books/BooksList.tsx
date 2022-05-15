import { StyleSheet,Button, ImageBackground,View, FlatList, Platform } from 'react-native'
import { BooksProps, RootTabScreenProps } from '../../types'
import globalStore from '../../store/GlobalStore'
import { observer } from 'mobx-react'
import ImageSvg from '../../assets/images/Logo_black.svg'
import Paragraph28 from '../../components/text/Paragraph28'
import ListItem from '../../components/List/ListItem'
import TextInput24 from '../../components/input/TextInput'
import Icon from '../../components/buttons/Icon'
import IconImage from '../../assets/images/Group_7.svg'
import IconLogOff from '../../assets/images/Log_Out.svg'
import { StatusBar } from 'expo-status-bar'

const BooksList = observer(({ navigation }: RootTabScreenProps<'BooksList'>) => {

async function fetchMoreData(){
  globalStore.increasePageCount()
  await globalStore.getBooksList()
}

  function renderItem(item:BooksProps){
    
    async function fetchData(){
      await globalStore.getBookById()
    }

    function onPress(){
      globalStore.bookId = item.id
      fetchData()
      navigation.navigate('ItemDetails')
    }
    return(
      <ListItem
          title={item.title}
          imageUrl={item.imageUrl}
          author={item?.authors[0]}
          published={item.published}
          publisher={item.publisher}
          pageCount={item.pageCount}
          onPress={onPress}
      />
    )
  }

  function logOff(){
    globalStore.email = ''
    globalStore.passWord = ''
    navigation.navigate('LogIn')
  }

  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        <View style={styles.header}>
            <View style={styles.headerTitle}>
              <View style={styles.headerTitlePrimary}>
                <ImageSvg />
                <Paragraph28 style={{fontWeight:'200',color:'black'}}>Books</Paragraph28>
              </View>
              <Icon innerIcon={<IconLogOff />} onPress={logOff}/>
            </View>
            <View style={styles.headerInput}>
              <TextInput24 
              placeholder='Pesquisar'
              style={styles.textInput}            
              mode='outlined'
              selectionColor='black'
              outlineColor='black'
              theme={{colors:{text:'black'}}}
              activeOutlineColor='black'
              right
              iconName="text-search"
              />
              <Icon innerIcon={<IconImage />}/>
            </View>
        </View>
        <FlatList
        keyExtractor={(item) => item.id}
        data={globalStore.booksList}
        renderItem={({item})=>renderItem(item)}
        onEndReached={()=>fetchMoreData()}
        onEndReachedThreshold={0.5}
        initialNumToRender={10}
        />
    </View>
    
  );
})
export default BooksList
const styles = StyleSheet.create({
  textInput:{
    backgroundColor:'rgba(0,0,0,0)',
    width:'85%'
  },
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',
  },
  header:{
    padding:20
  },
  headerInput:{
    flexDirection:'row',
    alignItems:'center'
  },
  headerTitle:{
    margin:15,
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor:'0000'
  },
  headerTitlePrimary:{
    flexDirection:'row',
    flexBasis:'90%',
    justifyContent:'space-around',
    alignItems:'center'
  }
});
