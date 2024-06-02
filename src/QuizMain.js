import React from 'react';
import './QuizMain.css';
import Quiz01 from './quiz01/Quiz01';

function QuizMain() {
  return (
    <div className="QuizMain">
      <header className="QuizMain-header">
        <h1 className="QuizMain-title">인지 중재 치료</h1>
        <p className='QuizMian-title'>치매 환자의 인지 기능 향상과 일반인들의 치매 예방을 위한 두뇌 훈련 웹사이트</p>
        <p className="QuizMain-info">20191122 고병현</p>
      </header>
      <main className="QuizMain-main">
        <Quiz01 />
      </main>
    </div>
  );
}

export default QuizMain;