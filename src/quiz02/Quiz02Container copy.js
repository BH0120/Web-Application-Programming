import React, { useState } from "react";

function Quiz02Container(props) {
  const samples = props.samples;

  // 숫자 랜덤 생성
  function randomQuiz() {
    let num1, num2, num3, total;

    function randomNum() {
      // 중복 없을 때까지 실행
      do {
        num1 = Math.floor(Math.random() * 100 + 1);
        num2 = Math.floor(Math.random() * 100 + 1);
        num3 = Math.floor(Math.random() * 100 + 1);
      } while (num1 === num2 || num2 === num3 || num3 === num1);

      total = num1 + num2 - num3;

      // 0보다 작거나 100보다 크면 함수 다시 실행
      if (total <= 0 || total > 100) {
        randomNum();
      }
    }

    //중복없는 숫자 생성 함수 호출
    randomNum();

    //값이 0보다 작거나 100보다 크면 안됨.
    while (total < 0 || total > 100) {
      //다시 숫자를 생성
      randomNum();
      total = num1 + num2 - num3;
    }

    return { num1, num2, num3, total };
  }

  const quiz = randomQuiz();

  function changeIntToChn(num) {
    if (num <= 10) {
      const resultChn = samples.find((item) => item.value === num);

      return resultChn ? resultChn.char : "";
    } else {
      const tens = Math.floor(num / 10);
      const units = num % 10 !== 0 ? num % 10 : "";
      //십의 자리와 일의 자리에 맞는 한문을 props.samples의 내부에서 찾음
      const tenChn = samples.find((item) => item.value === tens);
      const tenChar = tenChn ? tenChn.char : "";
      if (units !== "") {
        const unitChn = samples.find((item) => item.value === units);
        const unitChar = unitChn ? unitChn.char : "";
        const resultChn = tenChar + "十" + unitChar;
        return resultChn;
      } else {
        const resultChn = tenChar + "十";
        return resultChn;
      }
    }
  }

  return (
    <>
      <div className="quiz02-container">
        <div className="quiz02-div">
          {changeIntToChn(quiz.num1)} + {changeIntToChn(quiz.num2)} -{" "}
          {changeIntToChn(quiz.num3)} =
          <input type="text" >
          </input>

        </div>
      </div>
    </>
  );
}

export default Quiz02Container;
