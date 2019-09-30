import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  max-width: 720px;
  margin: auto;

  h1,
  h2,
  h3,
  h4 {
    font-weight: bold;
    margin-bottom: 0px;
  }

  p {
    padding: 0px 25px;
    margin: 0px auto;

    color: ${({ isDark }) =>
      isDark ? `white!important!imporant` : `rgba(75,75,75,0.75)!important`};
  }

  a {
    text-decoration: none;
    color: rgba(75, 75, 75, 0.75) !important;
  }

  @media only screen and (max-width: 600px) {
    h1,
    h2,
    h3,
    h4 {
      font-size: 2rem;
    }

    p{
      font-size: 0.8rem;
    }
  }
`;

const HeaderDesc = ({ children, isDark }) => {
  return <Div isDark={isDark}>{children}</Div>;
};

export default HeaderDesc;
