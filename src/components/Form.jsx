import React from 'react';
import styled, { css } from 'styled-components/macro';

const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  background-color: var(--primary-color);
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  ${({ type }) => type === 'submit' && css`
    display: block;
    width: 100%;
    margin-top: 1rem;
    border-radius: 0.25rem
  `}
`

const BasicInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
  placeholder: props.placeholder || 'Please enter a value',
}))`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  margin-top: 1rem;
  width: 100%;
  &:focus-visible {
    outline-color: var(--primary-color);
  }
`

const Form = () => {
  return (
    <div>
      <Button>Click me</Button>
      <form css={`
        width: 350px; 
        background: #fff; 
        padding: 2rem; 
        margin-top: 1rem;
        border-radius: 0.25rem;
        &:hover {
        box-shadow: 0 0 6px var(--primary-color);
        }
        `}
      >
        <h2>Form </h2>
        <BasicInput type="text" />
        <BasicInput type="email" placeholder="Enter email" />
        <BasicInput type="number" />
        <Button type="submit">SUBMIT</Button>
      </form>
    </div>
  )
}

export default Form;