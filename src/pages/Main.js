import React from "react";

import styled from "styled-components";

import LandingImage from "../components/main/LandingImage";
import UserCheck from "../components/main/UserCheck";

const Main = () => {
  return (
    <MainWrap>
      <LandingImage />
      <UserCheck />
    </MainWrap>
  );
};

const MainWrap = styled.div`
  display: flex;
`;

export default Main;
