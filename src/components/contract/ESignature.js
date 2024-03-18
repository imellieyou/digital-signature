import React, { useEffect, useState } from "react";

import axios from "axios";

import styled from "styled-components";

const ESignature = () => {
  const [signature, setSignature] = useState("");

  useEffect(() => {
    getSignature();
  }, []);

  const getSignature = () => {
    axios.get("http://localhost:4000/signature").then((res) => {
      setSignature(
        res.data.filter((el) => el.id === "codingKim")[0]?.eSignature
      );
    });
  };

  return signature && <Sign alt="전자서명 이미지" src={signature} />;
};

const Sign = styled.img`
  position: absolute;
  bottom: -25%;
  right: 0;
  width: 80px;
`;

export default ESignature;
