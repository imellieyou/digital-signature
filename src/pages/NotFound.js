import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import sadFace from "../assets/images/sadFace.svg";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Background>
      <NotFoundWrap>
        <Icon alt="notFoundImage" src={sadFace} />
        <Text>
          <strong>앗! 알 수 없는 주소입니다.</strong>
          <br />
          <span>주소를 다시 확인하거나, 메인 화면으로 돌아가세요.</span>
        </Text>
        <BtnToHome onClick={() => navigate("/")}>
          메인 화면으로 돌아가기
        </BtnToHome>
      </NotFoundWrap>
    </Background>
  );
};

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  color: #fff;
  background-color: #4682b4;
`;

const NotFoundWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 150px;
`;

const Text = styled.span`
  font-size: 28px;
  letter-spacing: -0.04em;
`;

const BtnToHome = styled.button`
  margin-top: 30px;
  width: 80%;
  padding: 15px 40px;
  border-radius: 35px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: #4682b4;
  background-color: #fff;
  cursor: pointer;
`;

export default NotFound;
