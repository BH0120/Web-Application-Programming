import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./Quiz02Container.css";

function Quiz02Container(props) {
  const samples = props.samples;
  const [quiz, setQuiz] = useState({});
  const [answer, setAnswer] = useState("");
  const [correct, setCorrect] = useState("");
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);

  //렌더링 방지
  useEffect(() => {
    setQuiz(randomQuiz());
  }, []);

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

    // 중복없는 숫자 생성 함수 호출
    randomNum();

    // 값이 0보다 작거나 100보다 크면 안됨.
    while (total < 0 || total > 100) {
      // 다시 숫자를 생성
      randomNum();
      total = num1 + num2 - num3;
    }

    setCorrect(changeIntToChn(total)); // 정답을 한자로 변환하여 저장
    return { num1, num2, num3, total };
  }

  function changeIntToChn(num) {
    if (num <= 10) {
      const resultChn = samples.find((item) => item.value === num);
      return resultChn ? resultChn.char : "";

    } else {

      const tens = Math.floor(num / 10);
      const units = num % 10 !== 0 ? num % 10 : "";
      const tenChn = samples.find((item) => item.value === tens);
      const tenChar = tenChn ? tenChn.char : "";

      if (units !== "") {
        const unitChn = samples.find((item) => item.value === units);
        const unitChar = unitChn ? unitChn.char : "";
        return tenChar + "十" + unitChar;
        
      } else {
        return tenChar + "十";
      }
    }
  }

  function handleChnBtn(chn) {
    setAnswer((prev) => prev + chn);
  }

  function handleClear() {
    setAnswer("");
  }

  function handleSubmit() {
    if (answer === correct) {
      setScore(score + 1);
      Swal.fire({
        icon: "success",
        title: "정답입니다!",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        icon:'error',
        text: '오답입니다. :(',
        showConfirmButton: false,
        timer: 1500
      })
    }

    setCount((prev) => {
      if(prev + 1 === 5){
        Swal.fire({
          title: `점수`,
          text: `${score} / ${count+1}`
        })
        setScore(0);
        setCount(0);
        setAnswer("");
      } else {
        setAnswer(""); 
        setQuiz(randomQuiz()); 
        return prev + 1;
      }
    })
  }

  return (
    <>
      <div className="quiz02-container">
        <div className="quiz02-div">
          {changeIntToChn(quiz.num1)} + {changeIntToChn(quiz.num2)} - {changeIntToChn(quiz.num3)} =
          <div className="input-container">
            <input type="text" value={answer} readOnly className="answer-box" />
            <div className="button-container">
              <button className="clear-button" onClick={handleClear}>
                ←
              </button>
              <button className="submit-button" onClick={handleSubmit}>
                ✓
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 style={{marginTop:"1rem",marginBottom:0, textAlign:"left"}}>입력</h2>
      <div className="answer02-container">
        {samples.map((item) => (
          <div
            key={item.value}
            className="answer-button"
            onClick={() => handleChnBtn(item.char)}
          >
            {item.char}
          </div>
        ))}
      </div>
    </>
  );
}

export default Quiz02Container;
