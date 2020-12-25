import styled from "styled-components";

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing}rem;

  @media only screen and (max-width: 800px) {
    padding: ${({ theme }) => theme.spacing / 2}rem;
  }
`;

export default Section;
