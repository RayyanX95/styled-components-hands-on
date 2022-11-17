import styled from "styled-components";

const BasicTitle = styled.h2 `
text-align: center;
text-transform: capitalize;
`;


function App() {
  return (
    <div style={{ padding:"2rem"}}>
      <BasicTitle>Styled Title</BasicTitle>
    </div>
  );
}

export default App;
