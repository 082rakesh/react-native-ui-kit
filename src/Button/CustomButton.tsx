import { StyleSheet, Pressable, type ViewStyle } from 'react-native';
import React from 'react';
import { ButtonStyle, ButtonType } from './ButtonStyle';

export type Props = {
  children: React.ReactElement;
  onPress?: () => void;
  style?: ViewStyle;
  type?: ButtonType;
};

const CustomButton = ({
  children,
  onPress,
  style = {},
  type = ButtonType.PRIMARY,
}: Props) => {
  return (
    <Pressable style={[styles[type], { ...style }]} onPress={onPress}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primary: {
    ...ButtonStyle.style.primary,
  },
  secondary: {
    ...ButtonStyle.style.secondary,
  },
  largePrimary: {
    ...ButtonStyle.style.largePrimary,
  },
  largeSecondary: {
    ...ButtonStyle.style.largeSecondary,
  },
  link: {
    ...ButtonStyle.style.link,
  },
});

export default CustomButton;
