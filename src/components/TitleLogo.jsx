import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Div = styled.div`
  display: inline-block;
  text-align: center;

  img {
    margin: 40px 0px;
  }

  p {
    margin-top: -18px;
    color: rgba(75,75,75, 0.75);
  }
`;

const TitleLogo = () => {
  return (
    <Div>
      <img src={logo} width={150} alt="Dwyte Martin Logo" />
      <h1>Dwyte</h1>
      <p>0100110100101110</p>
    </Div>
  );
};

export default TitleLogo;
