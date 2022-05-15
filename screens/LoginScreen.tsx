import { StyleSheet,Button, ImageBackground,View, Text } from 'react-native'
import { RootTabScreenProps } from '../types'
import globalStore from '../store/GlobalStore'
import { observer } from 'mobx-react'
import Paragraph28 from '../components/text/Paragraph28'
import ImageSvg from '../assets/images/Logo.svg'
import TextInput from '../components/input/TextInput'
import Button22 from '../components/buttons/Button'
import ReactNativeModal from 'react-native-modal'
import CustomModal from '../components/modal/CustomModal'

 const LoginScreen = observer(({ navigation }: RootTabScreenProps<'LogIn'>) => {

function hideModal(){
  globalStore.toogleError()
}

  function handleEmail(text:string){
    globalStore.email = text
  }

  function handlePassword(passWord:string){
    globalStore.passWord = passWord
  }

  async function handleLogin(){
    const result = await globalStore.loginUser()
    if(result){
      navigation.navigate('BooksList')
    }
  }

  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/Background_Image.png')} style={styles.backgroundImage} resizeMode="cover">
    <View style={styles.inputForm}>
        <View style={styles.inputTitle}>
            <ImageSvg />
            <Paragraph28 style={{fontWeight:'200',color:'white'}}>Books</Paragraph28>
        </View>
        <View style={styles.inputLabels}>
            <TextInput 
            label='Email'
            onChangeText={handleEmail}
            />
            <TextInput 
            label='Senha'
            onChangeText={handlePassword}
            secureTextEntry={globalStore.securePass}
            right
            iconName={globalStore.securePass?'eye-off':'eye'}
            onRightPress={()=>globalStore.toogleSecure()}
            />
            <View style={styles.loginButton}>
            <Button22
            textColor="#B22E6F"
            onPress={handleLogin}
            disabled={globalStore.isFetching}
            loading={globalStore.isFetching}
            >
                Login
            </Button22>
            </View>
        </View>
    </View>
    </ImageBackground>
      <CustomModal 
      isModalVisible={globalStore.error?.hasError}
      description={globalStore.error?.errorMessage}
      toggleModal={hideModal}
      />
    </View>
  );
})
export default LoginScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
},

backgroundImage:{
    padding:20,
    flex: 1,
    justifyContent: "center"
  },
  inputTitle:{
    marginBottom:'10%',
    justifyContent:'space-evenly',
    alignItems:'flex-start',
    flexDirection:'row',
    backgroundColor:'0000'
  },
  inputLabels:{
    justifyContent:'space-evenly',
  },
  inputForm:{
    //   alignItems:''
      
  },
  loginButton:{
    alignItems:'center',
  }
});
