import styled, { css } from "styled-components/macro";

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
  ${({ large }) => large
    ? css`
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
`
    : css`
    padding: 0.5rem;
  font-size: 1rem;
  font-weight: 400;
`}
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`