import BasicTitle from './components/BasicTile';
import { DefaultButton, HipsterButton } from './components/DefaultButton';

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <BasicTitle>Styled Title</BasicTitle>
      <BasicTitle color="red">Styled Title</BasicTitle>
      <BasicTitle color="blue">Styled Title</BasicTitle>
      <BasicTitle color="green">Styled Title</BasicTitle>
      <DefaultButton>Click me :)</DefaultButton>
      <HipsterButton>Hipster Button 🥳</HipsterButton>
    </div>
  );
}

export default App;
