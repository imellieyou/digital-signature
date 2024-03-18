import React from "react";

import styled from "styled-components";
import Paper from "../components/contract/Paper";

const Contract = () => {
  return (
    <ContractWrap>
      <PaperWrap>
        <Header>안녕하세요.</Header>
        <Body>
          <Paper />
        </Body>
        <Footer>Copyright © 2024 imellieyou. All rights reserved.</Footer>
      </PaperWrap>
    </ContractWrap>
  );
};

const ContractWrap = styled.div`
  background-color: #fff;
  height: 100vh;
`;

const PaperWrap = styled.div`
  background-color: #4682b4;
  color: #eee;
  width: 33vw;
  height: 100%;
  margin: auto;
  padding: 20px 30px;
  box-sizing: border-box;
`;

const Header = styled.header`
  font-size: 32px;
  font-weight: 600;
  letter-spacing: -0.04em;
  margin-bottom: 20px;
`;

const Body = styled.body`
  width: 100%;
  height: 85vh;
  background-color: #fff;
  padding: 50px 25px;
  box-sizing: border-box;
`;
const Footer = styled.footer`
  text-align: center;
  margin-top: 25px;
  font-size: 12px;
  color: #eee;
  position: fixed;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
`;

export default Contract;
