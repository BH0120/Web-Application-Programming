import React from "react";
import SampleContainer from "./SampleContainer";
import Quiz02Container from "./Quiz02Container";

function Quiz02(props) {
  const samples = [
    { char: "一", value: 1 },
    { char: "二", value: 2 },
    { char: "三", value: 3 },
    { char: "四", value: 4 },
    { char: "五", value: 5 },
    { char: "六", value: 6 },
    { char: "七", value: 7 },
    { char: "八", value: 8 },
    { char: "九", value: 9 },
    { char: "十", value: 10 },
  ];

  return (
    <>
      <h2>
        Q. 아래 보기는 숫자를 한문으로 표기한 것입니다. <br />
        예시를 보며 계산 문제를 풀어보세요.
      </h2>
      <SampleContainer samples={samples} />

      <Quiz02Container samples={samples} />
    </>
  );
}

export default Quiz02;
