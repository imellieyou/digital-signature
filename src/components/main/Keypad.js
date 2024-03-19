import { useState, useEffect } from "react";

import styled from "styled-components";

const Keypad = ({ onClick }) => {
  const [numbers, setNumbers] = useState(["back", "clear"]);
  const [clickedKey, setClickedKey] = useState(false);

  useEffect(() => {
    const numbers = Array.from({ length: 10 }, (_, index) => index);

    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    numbers.splice(9, 0, "clear");
    numbers.splice(11, 0, "back");

    setNumbers(numbers);
  }, []);

  return (
    <KeypadWrap>
      {numbers.map((num, i) => {
        return (
          <Key
            key={i}
            onClick={() => onClick(num)}
            clicked={clickedKey}
            onMouseUp={() => setClickedKey(false)}
          >
            {num}
          </Key>
        );
      })}
    </KeypadWrap>
  );
};

const KeypadWrap = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Key = styled.button`
  width: 150px;
  height: 70px;
  background-color: white;
  color: #bbb;
  border: 2px solid;
  border-color: ${(props) => (props.clicked ? "black" : "#bbb")};
  border-radius: 10px;
  line-height: 70px;
`;

export default Keypad;
