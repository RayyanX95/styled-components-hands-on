import styled from "styled-components";

const BasicTitle = styled.h2 `
text-align: center;
text-transform: capitalize;
color: ${(props) => props.color};
`;

export default BasicTitle;