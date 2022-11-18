
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DefaultButton } from './components/DefaultButton';
import GlobalStyle from './components/GlobalStyle';

const baseTheme = {
  color: "#222",
  background: "#fff",
}

const darkTheme = {
  color: "#fff",
  background: "#222",
}

const ContainerToTestThemProvider = styled.div`
  padding: 2rem;
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.background};
  border-radius: 0.35rem;
  box-shadow: 0 2px 2px #666;
`;

function App() {
  const [isBaseTheme, toggleTheme] = useState(true);
  const toggleThemeHandler = () => toggleTheme(isBaseTheme => !isBaseTheme);

  return (
    <ThemeProvider theme={isBaseTheme ? baseTheme : darkTheme}>
      <div style={{ padding: "2rem" }}>
        <GlobalStyle />
        <ContainerToTestThemProvider>
          <h2>Theme Provider</h2>
          <DefaultButton onClick={toggleThemeHandler}>Toggle me!</DefaultButton>
        </ContainerToTestThemProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
