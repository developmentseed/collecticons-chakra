import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: '#f1584a'
  },
  styles: {
    global: {
      'html, body': {
        backgroundColor: 'primary'
      }
    }
  }
});
