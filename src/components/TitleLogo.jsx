import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";
import HeaderDesc from "./common/HeaderDesc";

const Div = styled.div`
  display: inline-block;
  text-align: center;

  img {
    margin: 40px 0px;
  }
`;

const TitleLogo = () => {
  return (
    <Div>
      <img src={logo} width={150} alt="Dwyte Martin Logo" />

      <HeaderDesc>
        <h1>Dwyte</h1>
        <p>0100110100101110</p>
      </HeaderDesc>
    </Div>
  );
};

export default TitleLogo;
