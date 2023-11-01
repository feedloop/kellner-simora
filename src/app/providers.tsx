'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

export function Providers({ children }: { children: React.ReactNode }) {
  const colors = {
    primary: {
      900: '#820700',
      800: '#A11D00',
      700: '#C13800',
      600: '#E05400',
      500: '#EE7105',
      400: '#FF8B24',
      300: '#FFA548',
      200: '#FFBD6D',
      100: '#FFD391',
      50: '#FFE6B5',
    },
  };

  const theme = extendTheme({
    colors,
    components: {
      Button: {
        baseStyle: {
          _focus: {
            boxShadow: 'none',
          },
        },
      },
      Link: {
        baseStyle: {
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
  });

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
