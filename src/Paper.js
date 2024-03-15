import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

import ESignature from "./ESignature";

const Paper = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:4000/document").then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });

    axios.get("http://localhost:4000/user").then((res) => {
      setUserName(res.data.name);
    });
  }, [title, content]);

  return (
    <Document>
      <Title>[ {title} ]</Title>
      <Content>{content}</Content>
      <Signature>
        성명 : <Name>{userName}</Name>
        <Sign>
          (인)
          <ESignature />
        </Sign>
      </Signature>
    </Document>
  );
};

const Document = styled.div`
  background-color: #fff;
  color: #333;
  text-align: center;
`;

const Title = styled.span`
  color: #333;
  letter-spacing: -0.04em;
`;

const Content = styled.div`
  width: 100%;
  height: 50vh;
  background-color: pink;
`;

const Signature = styled.div`
  margin: 20px 40px;
  width: 40%;
  background-color: #ddd;
  float: right;
  /* display: flex;
  justify-content: space-around; */
`;

const Name = styled.span`
  width: 40%;
  font-weight: 600;
  background-color: pink;
  text-align: left;
  border-bottom: 1px solid #333;
`;

const Sign = styled.div`
  position: relative;
  padding-right: 10px;
`;

export default Paper;
