import { TextProps } from 'react-native';
import { Text } from 'react-native-paper';
import { observer } from 'mobx-react';

const Paragraph28:React.FC<TextProps>=observer(({children,...props}) =>{
  return <Text {...props} style={[{ fontFamily: 'Heebo-boold',fontSize:28 },props.style]} >
    {children}
  </Text>;
})
export default Paragraph28