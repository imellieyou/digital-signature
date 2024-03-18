import React from "react";

import styled from "styled-components";

const Button = (props) => {
  const { type, text } = props;
  return <BtnWrap type={type}>{text}</BtnWrap>;
};

const BtnWrap = styled.button``;

export default Button;
