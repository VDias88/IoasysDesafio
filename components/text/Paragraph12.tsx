import { TextProps } from 'react-native';
import { Text } from 'react-native-paper';
import { observer } from 'mobx-react';

const Paragraph12:React.FC<TextProps>=observer(({children,boold,...props}) =>{
  return <Text {...props} style={[{ fontFamily: boold?'Heebo-boold':'Heebo',fontSize:12},props.style]} >
    {children}
  </Text>;
})
export default Paragraph12