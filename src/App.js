import React from 'react';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Themeroutes from './routes/Router';
import ThemeSelector from './layouts/theme/ThemeSelector';
import Loader from './layouts/loader/Loader';
import { UserProvider } from './userContext/userContext';

const queryClient = new QueryClient();

const App = () => {
  const routing = useRoutes(Themeroutes);
  const direction = useSelector((state) => state.customizer.isRTL);
  const isMode = useSelector((state) => state.customizer.isDark);
  // console.log(process.env.REACT_APP_CLOUD_NAME)

  return (
    <UserProvider>
      <QueryClientProvider  client={queryClient}>
        <div
          className={`${direction ? 'rtl' : 'ltr'} ${isMode ? 'dark' : ''}`}
          dir={direction ? 'rtl' : 'ltr'}
        >
          <ThemeSelector />
          {routing}
        </div>
      </QueryClientProvider>
    </UserProvider>
  );
};

export default App;
