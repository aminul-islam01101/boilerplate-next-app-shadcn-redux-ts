'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

export function Providers({ children, ...props }: ThemeProviderProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div>
      {isClient ? (
        <Provider store={store}>
          <NextThemesProvider {...props}>{children}</NextThemesProvider>{' '}
        </Provider>
      ) : (
        ''
      )}
    </div>
  );
}
