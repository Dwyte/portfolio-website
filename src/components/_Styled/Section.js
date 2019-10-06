import styled from "styled-components";

const Section = styled.section`
  margin-top: 50px;
  @media only screen and (max-width: 600px) {
    margin-top: 25px;
  }

  ${({ isLast }) =>
    isLast &&
    `
    margin-bottom: 50px;

    @media only screen and (max-width: 600px) {
      margin-bottom: 25px;
    }
  `}

  ${({ isDark }) =>
    isDark &&
    `
    background: rgb(25,25,25);
    padding: 50px 0px;
    color: white;
  `}
`;

export default Section;
