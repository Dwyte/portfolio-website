import styled from "styled-components";

const Anchor = styled.a`
  text-decoration: none !important;
  outline: none;

  * {
    text-decoration: none !important;
  }

  @media only screen and (max-width: 600px) {
    font-size: 14px !important;
  }
`;

export default Anchor;
