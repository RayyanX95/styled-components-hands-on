import styled from "styled-components";

export const DefaultButton = styled.button`
  background: var(--primary-color);
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
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`