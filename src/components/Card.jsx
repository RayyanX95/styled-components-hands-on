import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledCard>
      <img src="https://i.pinimg.com/564x/40/d9/b3/40d9b3c695021f671cb26bdd518e25a6.jpg" alt="product" />
      <footer>
        <h4>product name</h4>
        <p>$150</p>
      </footer>
    </StyledCard>
  );
};

const StyledCard = styled.article`
  width: 90vw;
  max-width: 3000px;
  background: var(--white);
  border-radius: 0.25rem;
  border: 1px solid #888;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 2rem;
    h4 {
      text-transform: capitalize;
      &::before {
        content: "Name: ";
        color: #666;
      }
    }
    p {
      font-weight: bold;
      color: var(--primary-color);
    }
  }
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 1px 1px 5px #666;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    max-width: 600px;
  }
`

export default Card;
