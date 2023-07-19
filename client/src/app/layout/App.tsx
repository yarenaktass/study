import Catalog from '../../features/catalog/Catalog';
import { Container, CssBaseline, Typography, createTheme } from '@mui/material';
import Header from './Header';
import { ThemeProvider } from '@emotion/react';
import { pink, purple } from '@mui/material/colors';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })


  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme} >
    <CssBaseline/>
     <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
     <Container>
     <Outlet />
     </Container> 
    </ThemeProvider>
  );
}

export default App;

// Container bileşeni, responsive tasarım prensiplerini takip ederek farklı ekran boyutlarına uyum sağlar. Sayfanızın içeriği büyüdükçe veya küçüldükçe, Container bileşeni otomatik olarak uygun bir genişlikte kalır ve içeriği merkezler.