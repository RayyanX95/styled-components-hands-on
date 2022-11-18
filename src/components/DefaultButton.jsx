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
  width: 250px;
  background: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  padding: 1rem ;
  display: inline-block;
  margin-right: 1rem;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`