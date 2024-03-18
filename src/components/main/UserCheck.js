import React from "react";

import styled from "styled-components";
import Keypad from "./Keypad";
import { useNavigate } from "react-router-dom";

const UserCheck = () => {
  const navigate = useNavigate();

  const moveMain = () => {
    navigate("/contract");
  };

  return (
    <UserCheckWrap>
      <Keypad />
      <BtnConfirm onClick={moveMain}>확인~</BtnConfirm>
    </UserCheckWrap>
  );
};

const UserCheckWrap = styled.div`
  width: 33vw;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  text-align: center; // 임시
  padding: 0 30px;
`;

const BtnConfirm = styled.button``;

export default UserCheck;
