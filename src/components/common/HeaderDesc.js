import styled from "styled-components";

const HeaderDesc = styled.div`
  color: ${({ theme }) => theme.fontColor};

  position: relative;
  max-width: 720px;
  margin: 0px auto;

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: 2px;
    margin-bottom: 0px;
    font-weight: bold;
  }

  p {
    margin: 0px auto;
    color: ${({ theme }) => theme.fontColorSecondary};
  }

  @media only screen and (max-width: 800px) {
    h1 {
      font-size: 2rem;
    }

    h2,
    h3,
    h4 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.8rem;
    }

    span {
      display: none;
    }
  }
`;

export default HeaderDesc;
