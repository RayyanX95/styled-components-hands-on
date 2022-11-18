import styled from "styled-components";

export const DefaultButton = styled.button`
  background: blueviolet;
  color: white;
  padding: .7rem;
  display: block;
  width: 200px;
  margin: 1rem auto;
  border: none;
  cursor: pointer;
`;

export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background: transparent;
  color: blueviolet;
  border: 1px solid blueviolet;
  &:hover {
    background-color: blueviolet;
    color: white;
  }
`