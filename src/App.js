import BasicTitle from './components/BasicTile';
import ComplexTitle from './components/ComplexTitle';
import { DefaultButton, HipsterButton } from './components/DefaultButton';
import Card from './components/Card';
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <GlobalStyle />
      <h2>Card will be here!</h2>
      <Card />
    </div>
  );
}

export default App;
