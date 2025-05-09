import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider, useThemeContext } from './src/context/ThemeContext';
import AppNavigator from './src/navigation';
import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';
import { lightTheme } from './src/shared/theme/Light';
import darkTheme from './src/shared/theme/Dark';
import { FavoritesProvider } from './src/context/FavoritesContext';
import Toast from 'react-native-toast-message';

function MainApp() {
  const { isDark } = useThemeContext();
  
  return (
    <StyledThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <AppNavigator />
        <Toast />
      </NavigationContainer>
    </StyledThemeProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <MainApp />
      </FavoritesProvider>
    </ThemeProvider>
  );
}