
import { HipsterButton } from './components/DefaultButton';
import GlobalStyle from './components/GlobalStyle';
function App() {

  return (
    <div style={{ padding: '2rem'}}>
      <GlobalStyle />
      <HipsterButton>Click me</HipsterButton>
      <HipsterButton as="a" href="www.twitter.com">Twitter me</HipsterButton>
      <HipsterButton>Click me</HipsterButton>
    </div>
  );
}

export default App;
