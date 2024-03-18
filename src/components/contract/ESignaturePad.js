import { useEffect, useState, useRef } from "react";

import axios from "axios";
import styled from "styled-components";
import Swal from "sweetalert2";

import ic_cancel from "../../assets/images/ic_cancel.png";
import ic_reset from "../../assets/images/ic_reset.png";

const ESignaturePad = (props) => {
  const { onClose } = props;

  const canvasRef = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState(null);
  const [beforeSigning, setBeforeSigning] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    setCtx(ctx);
  }, []);

  const drawingSignature = (e) => {
    const mouseX = e.nativeEvent.offsetX;
    const mouseY = e.nativeEvent.offsetY;

    if (!isDrawing) {
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
    } else {
      setBeforeSigning(false);

      ctx.lineWidth = 5;
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
    }
  };

  const reset = () => {
    if (!ctx) return;

    ctx.reset();
    setBeforeSigning(true);
  };

  const submit = () => {
    if (beforeSigning) return;

    axios
      .post("http://localhost:4000/signature", {
        id: "codingKim",
        eSignature: canvasRef.current.toDataURL(),
        date: new Date().toLocaleString()
      })
      .then((res) => {
        Swal.fire({
          title: "",
          text: "전자서명이 입력되었습니다.",
          icon: "success",
          iconColor: "#4682b4",
          timer: 1500,
          customClass: {},
          heightAuto: true,
          showConfirmButton: false
        }).then(() => onClose());
      })
      .catch((err) => {
        Swal.fire({
          title: "",
          text: "전자서명이 입력 중 문제가 발생했습니다 <br /> 다시 시도해주세요.",
          icon: "warning",
          heightAuto: true,
          confirmButtonText: "닫기"
        });
      });
  };

  return (
    <Dim>
      <Pad>
        <BtnClose
          onClick={onClose}
          // href="https://www.flaticon.com/free-icons/close"
          title="close icons"
        >
          Close icons created by Roundicons - Flaticon
        </BtnClose>
        <h3>전자서명 입력</h3>
        <CanvasWrap>
          <BtnReset
            onClick={reset}
            // href="https://www.flaticon.com/kr/free-icons/"
            title="초기화 아이콘 : inkubators - Flaticon"
          >
            초기화 아이콘
          </BtnReset>
          <canvas
            ref={canvasRef}
            width="515"
            height="250"
            onMouseDown={() => setIsDrawing(true)}
            onMouseMove={(e) => drawingSignature(e)}
            onMouseLeave={() => setIsDrawing(false)}
            onMouseUp={() => setIsDrawing(false)}
          />
        </CanvasWrap>

        <BtnSubmit disabled={beforeSigning ? true : false} onClick={submit}>
          서명 입력하기
        </BtnSubmit>
      </Pad>
    </Dim>
  );
};

const Dim = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

const BtnClose = styled.a`
  position: absolute;
  right: 20px;
  top: 15px;
  border: none;
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url(${ic_cancel});
  background-position: center;
  background-size: cover;
  text-indent: -9999px;
`;

const Pad = styled.div`
  width: 580px;
  height: 400px;
  border-radius: 10px;
  background-color: #eee;
  border: 1.5px solid #333;
  z-index: 2;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 20px;
  box-sizing: border-box;
  text-align: left;
`;

const CanvasWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
`;

const BtnReset = styled.a`
  position: absolute;
  bottom: 20px;
  right: 30px;
  width: 30px;
  height: 30px;
  background-image: url(${ic_reset});
  background-position: center;
  background-size: cover;
  text-indent: -9999px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

const BtnSubmit = styled.button`
  position: absolute;
  bottom: 15px;
  right: 50%;
  transform: translateX(50%);
  padding: 10px 20px;
  width: 50%;
  border: 1px solid;
  color: ${(props) => (props.disabled ? "" : "#fff")};
  border-color: ${(props) => (props.disabled ? "#ddd" : "#4682b4")};
  border-radius: 25px;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  background-color: ${(props) => (props.disabled ? "" : "#4682b4")};
`;

export default ESignaturePad;
