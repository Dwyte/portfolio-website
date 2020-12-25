import styled, { css } from "styled-components";

const Anchor = styled.a`
  text-decoration: none !important;
  outline: none;
  * {
    text-decoration: none !important;
  }
  @media only screen and (max-width: 600px) {
    button {
      font-size: 14px !important;
    }
  }

  ${({ theme, isText }) =>
    isText &&
    css`
      color: ${theme.accentColor};

      :hover {
        padding-bottom: 0.1rem;
        color: ${theme.accentColor};
        border-bottom: 1px dashed ${theme.accentColor};
      }
    `}
`;

export default Anchor;
