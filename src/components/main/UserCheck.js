import { useState, useEffect } from "react";

import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import Keypad from "./Keypad";

const UserCheck = () => {
  const [inputValue, setInputValue] = useState("");
  const [keypadOn, setKeypadOn] = useState(false);

  const navigate = useNavigate();

  const handleOnChange = (e) => {};

  const handleConfirmPwd = (pwd) => {
    axios.get("http://localhost:4000/user?id=1").then((res) => {
      if (res.data[0].pwd === pwd) {
        navigate("/contract");
      } else {
        Swal.fire({
          text: "비밀번호가 일치하지 않습니다.",
          icon: "error",
          timer: 1500,
          confirmButtonText: "닫기"
        });
      }
    });
  };

  const handleOnClick = (key) => {
    if (key === "back") {
      setInputValue((prev) => prev.slice(0, -1));
      return;
    } else if (key === "clear") {
      setInputValue("");
      return;
    } else {
      setInputValue((prev) => prev + key);
    }
  };

  return (
    <UserCheckWrap>
      <Password>
        <PwdInput
          type="text"
          placeholder="인증번호를 입력해주세요."
          value={inputValue}
          onChange={(e) => handleOnChange(e)}
          onClick={() => setKeypadOn(!keypadOn)}
        />
        <BtnConfirm onClick={() => handleConfirmPwd(inputValue)}>
          입력
        </BtnConfirm>
      </Password>
      {keypadOn && <Keypad onClick={handleOnClick} />}
    </UserCheckWrap>
  );
};

const UserCheckWrap = styled.div`
  width: 33vw;
  height: 100vh;
  background: #fff;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  text-align: center; // 임시
  padding: 150px 30px;
`;

const Password = styled.div`
  width: 100%;
`;

const PwdInput = styled.input`
  width: 50%;
`;
const BtnConfirm = styled.button``;

export default UserCheck;
