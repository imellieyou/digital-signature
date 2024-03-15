import styled from "styled-components";
import Paper from "./Paper";

function App() {
  return (
    <AppWrap>
      <Header>전자서명</Header>
      <Body>
        호오
        <Paper />
      </Body>
      <Footer>Copyright © 2024 imellieyou. All rights reserved.</Footer>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  background-color: #4682b4;
  color: #eee;
  width: 40vw;
  height: 100vh;
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
`;
const Footer = styled.footer`
  text-align: center;
  margin-top: 25px;
  font-size: 12px;
  color: #eee;
`;

export default App;
