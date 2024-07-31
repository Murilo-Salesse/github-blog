import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/deafult';
import { GlobalStyle } from './styles/global';

import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}