/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GestureResponderEvent } from 'react-native-modal';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  LogIn:undefined;
  ItemDetails: undefined;
  BooksList: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  LogIn:undefined;
  BooksList:undefined
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type TextInputProps = {
  label: string;
  rigth?: React.ReactNode;
  props?: any;
  iconName?:string;
  right?:boolean;
  secureTextEntry?:boolean
  onRightPress?:CallableFunction
};

export type SecurityData ={
  authorization?:string;
  'refresh-token'?:string
}

export type ParsedSecurityData ={
  authorization?:string;
  refreshToken?:string
}

export type BooksProps ={
  id:string;
  title?:string;
  description?:string;
  author?:string;
  pageCount?:number;
  publisher?:string;
  published?:number;
  imageUrl?:string;
  onPress?:CallableFunction
}

export type BooksDetailsProps ={
  id?:string;
  title?:string;
  description?:string;
  authors?:Array<string>;
  pageCount?:number;
  publisher?:string;
  published?:number;
  imageUrl?:string;
  category?:string;
  language?:string;
  isbn10?:string;
  isbn13?:string;
  onPress?:CallableFunction
}

export type DescriptionItemProps = {
  pageCount?:number;
  publisher?:string;
  published?:number;
  language?:string;
  isbn10?:string;
  isbn13?:string;
  category?:string;
}

export type IconProps = {
  onPress?:CallableFunction;
  innerIcon?:JSX.Element
}

export type BookDescriptionProps = {
  description?:string
}
export type ModalProps ={
  description?:string;
  toggleModal?:GestureResponderEvent
  isModalVisible?:boolean
}