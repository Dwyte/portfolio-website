import styled from "styled-components";

const Card = styled.div`
  height: 100%;
  width: 100%;

  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.foreground};

  box-shadow: 1px 0px 5px -1px #000;
  font-size: 0.75rem;
  cursor: pointer;
  color: white;

  :hover {
    background: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.foreground};
  }

  h6 {
    font-weight: bold;
    margin: 0px;
  }
`;

export default Card;
