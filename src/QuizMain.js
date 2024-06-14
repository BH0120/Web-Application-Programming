import React, { useState } from "react";
import "./QuizMain.css";
import Quiz04 from "./quiz04/Quiz04";
import Quiz05 from "./quiz05/Quiz05";
import Quiz06 from "./quiz06/Quiz06";

function QuizMain() {
  const [quizNum, setQuizNum] = useState("Quiz04");

  function quizRender() {
    if (quizNum === "Quiz04") {
      return <Quiz04 setQuizNum={setQuizNum} />;
    } else if (quizNum === "Quiz05") {
      return <Quiz05 setQuizNum={setQuizNum} />;
    } else {
      return <Quiz06 setQuizNum={setQuizNum} />;
    }
  }

  return (
    <div className="QuizMain">
      <header className="QuizMain-header">
        <h1 className="QuizMain-title">인지 중재 치료</h1>
        <p>
          치매 환자의 인지 기능 향상과 일반인들의 치매 예방을 위한 두뇌 훈련
          웹사이트
        </p>
        <div className="QuizMain-buttons">
          <button className={`quizNum-btn ${quizNum === "Quiz04" ? "active" : ""}`}
              onClick={() => setQuizNum("Quiz04")}> Quiz04</button>

          <button className={`quizNum-btn ${quizNum === "Quiz05" ? "active" : ""}`}
              onClick={() => setQuizNum("Quiz05")}> Quiz05</button>

          <button 
              className={`quizNum-btn ${quizNum === "Quiz06" ? "active" : ""}`} onClick={() => setQuizNum("Quiz06")}> Quiz06</button>
        </div>
        <p className="QuizMain-info">20191122 고병현</p>
      </header>
      <main className="QuizMain-main">
        {quizRender()}
      </main>
    </div>
  );
}

export default QuizMain;
