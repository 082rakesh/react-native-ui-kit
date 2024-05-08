import type { ViewStyle } from 'react-native';

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LARGE_PRIMARY = 'largePrimary',
  LARGE_SECONDARY = 'largeSecondary',
  LINK = 'link',
}

const primary: ViewStyle = {
  borderRadius: 5,
  alignItems: 'center',
  padding: 10,
  backgroundColor: 'red',
};

const linkStyle: ViewStyle = {
  backgroundColor: 'transparent', // Color should be used from the colorPalatte file.
  padding: 10,
  alignItems: 'center',
};

const secondary = {
  backgroundColor: 'transparent',
  borderWidth: 1,
};
export const ButtonStyle = {
  style: {
    primary,
    largePrimary: {
      ...primary,
      width: 200, // Width can be static or can be based on the screen size, useWindowDimensions hooks can be used to get screen width & height
    },
    secondary: {
      ...primary,
      ...secondary,
    },
    largeSecondary: {
      ...primary,
      ...secondary,
      width: 200,
    },
    link: {
      ...linkStyle,
    },
  },
};
