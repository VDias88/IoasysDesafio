import { View,StyleSheet } from 'react-native';
import { observer } from 'mobx-react'
import Paragraph12 from '../text/Paragraph12';
import Modal from 'react-native-modal';
import Button22 from '../buttons/Button';
import { ModalProps } from '../../types';
import Paragraph28 from '../text/Paragraph28';

const CustomModal:React.FC<ModalProps>=observer(({description,toggleModal,isModalVisible},...props:any) =>{
  return (
      <Modal isVisible={isModalVisible} 
      animationInTiming={500}
      onBackdropPress={() => toggleModal()}
      animationOutTiming={500}
      style={{
        margin: 0, justifyContent: 'flex-end', flex: 1,
      }}
      backdropTransitionOutTiming={500}
      backdropTransitionInTiming={500}
      backdropOpacity={0.7}
      hasBackdrop
      onSwipeComplete={() => toggleModal()}
      swipeDirection="down"
      swipeThreshold={70}
      backdropColor="#000000"
      animationIn="slideInUp"
      animationOut="slideOutDown"
      isVisible={isModalVisible}
      toggleModal={() => toggleModal()} >
        <View style={styles.modalStyle}>
          <Paragraph28>{description}</Paragraph28>
          <View>
            <Button22
                textColor="#B22E6F"
                onPress={toggleModal}

                >
                    Ok
                </Button22>
            </View>
        </View>
      </Modal>
  );
})
const styles = StyleSheet.create({
   modalStyle:{
       // flex: 1,
    alignItems: 'center',
    // backgroundColor: '#FAFAFA',
    padding: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
       backgroundColor:'#FFFFFF'
   }
})
export default CustomModal