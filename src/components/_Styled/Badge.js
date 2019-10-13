import styled from "styled-components";

const Badge = styled.div`
  color: white;
  background: ${({ bgColor }) => bgColor || "black"};
  border-radius: 12px;
  line-height: 15px;
  font-size: 12px;
  box-shadow: 1px 0px 5px -1px #000;
  cursor: pointer;

  transition-duration: 250ms;
  :hover {
    transform: scale3d(1.033, 1.033, 1.033);
  }

  h6 {
    font-weight: bold;
    margin: 0px;
  }
`;

export default Badge;
