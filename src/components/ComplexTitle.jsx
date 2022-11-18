import React from 'react';
import styled from 'styled-components';
import { colors } from './../utils';

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <div className="underline"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }

  .underline {
    width: 5rem;
    height: .25rem;
    background: ${colors.primaryColor};
    margin: 0 auto;
  }
`

export default ComplexTitle;


// ----------------------------------------


//* Another way to apply styled to a React component:

// const ComplexTitle = ({ title, className: classNameFromStyled }) => {
//   return (
//     <div className={classNameFromStyled}>
//       <h1>{title}</h1>
//       <div className="underline"></div>
//     </div>
//   );
// };

// const Wrapper = styled(ComplexTitle)`
//   h1 {
//     text-transform: capitalize;
//     text-align: center;
//   }

//   .underline {
//     width: 5rem;
//     height: .25rem;
//     background: var(--primary-color);
//     margin: 0 auto;
//   }
//   `

// export default Wrapper;
