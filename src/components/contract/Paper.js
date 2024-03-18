import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

import ESignature from "./ESignature";
import ESignaturePad from "./ESignaturePad";

const Paper = () => {
  const [contractName, setContractName] = useState("");
  const [contracts, setContracts] = useState([]);
  const [userName, setUserName] = useState("");

  const [padOn, setPadOn] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:4000/document").then((res) => {
      const target = res.data.filter((contract) => contract.id === 1);
      setContracts(target);
      setContractName(target[0].contractName);
    });

    axios.get("http://localhost:4000/user").then((res) => {
      setUserName(res.data.name);
    });
  }, []);

  const clickSignature = () => {
    setPadOn(true);
  };

  return (
    <Document>
      <Title>[ {contractName} ]</Title>
      <ContentWrap>
        {contracts.map((contract, i) => {
          return (
            <Content>
              <ArticleTitle>
                제 {i + 1}조. {contract.articleTitle}
              </ArticleTitle>
              <Article>
                {contract.article.length > 1
                  ? contract.article.map((el, idx) =>
                      idx < contract.article.length - 1 ? (
                        <>
                          {el}
                          <br />
                        </>
                      ) : (
                        el
                      )
                    )
                  : contract.article}
              </Article>
            </Content>
          );
        })}
        <SignatureWrap>
          성명 :
          <Signature>
            <Name>{userName}</Name>
            <Sign onClick={clickSignature}>
              (인)
              <ESignature />
            </Sign>
          </Signature>
        </SignatureWrap>
      </ContentWrap>

      {padOn && <ESignaturePad onClose={() => setPadOn(false)} />}
    </Document>
  );
};

const Document = styled.div`
  background-color: #fff;
  color: #333;
  text-align: center;
  letter-spacing: -0.04em;
  overflow-y: auto;
`;

const Title = styled.span`
  color: #333;
  font-weight: 600;
  letter-spacing: -0.04em;
`;

const ContentWrap = styled.div`
  width: 100%;
  height: 650px;
  overflow-y: auto;
  margin: 40px 0;
  text-align: left;
`;

const Content = styled.div``;

const ArticleTitle = styled.span`
  font-weight: 600;
`;

const Article = styled.p`
  margin: 10px 0 18px;
`;

const SignatureWrap = styled.div`
  width: 48%;
  position: relative;
  float: right;
  margin-top: 50px;
  &::after {
    content: "";
    display: block;
    border-bottom: 1px solid #333;
    margin-left: 40px;
  }
`;

const Signature = styled.div`
  width: calc(100% - 38px);
  margin-left: 38px;
  display: flex;
  gap: 25px;
  position: absolute;
  bottom: 3px;
  cursor: pointer;
`;

const Name = styled.span`
  width: 50%;
  font-weight: 600;
  margin-left: 18px;
`;

const Sign = styled.div`
  color: #bbb;
  text-align: center;
`;

export default Paper;
