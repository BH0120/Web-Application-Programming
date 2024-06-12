import React, { useState, useEffect } from 'react';
import './Quiz06.css';

// 총 6개의 끝말잇기 세트
const wordSets = [
  [
    { img: "/imgs/바나나.jpg", word: '바나나' },
    { img: "/imgs/나무.jpg", word: '나무' },
    { img: "/imgs/무지개.jpg", word: '무지개' },
    { img: "/imgs/개미.jpg", word: '개미' },
    { img: "/imgs/미소.jpg", word: '미소' },
    { img: "/imgs/소금.jpg", word: '소금' }
  ],
  [
    { img: "/imgs/냉장고.jpg", word: '냉장고' },
    { img: "/imgs/고양이.jpg", word: '고양이' },
    { img: "/imgs/이불.jpg", word: '이불' },
    { img: "/imgs/불고기.jpg", word: '불고기' },
    { img: "/imgs/기차.jpg", word: '기차' },
    { img: "/imgs/차도.jpg", word: '차도' }
  ],
  [
    { img: "/imgs/연필.jpg", word: '연필' },
    { img: "/imgs/필통.jpg", word: '필통' },
    { img: "/imgs/통나무.jpg", word: '통나무' },
    { img: "/imgs/무궁화.jpg", word: '무궁화' },
    { img: "/imgs/화가.jpg", word: '화가' },
    { img: "/imgs/가수.jpg", word: '가수' }
  ]
];

const fixedPositions = [
  { x: 20, y: 50 },
  { x: 600, y: 380 },
  { x: 300, y: 30 },
  { x: 150, y: 300 },
  { x: 450, y: 50 },
  { x: 50, y: 160 },
  { x: 780, y: 30 },
  { x: 550, y: 180 },
  { x: 370, y: 350 },
  { x: 850, y: 150 }
];

const getRandomPositions = (fixedPositions, count) => {
  const shuffled = fixedPositions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Quiz06 = () => {
  const [positions, setPositions] = useState([]);
  const [answers, setAnswers] = useState(Array(6).fill(''));
  const [imageWords, setImageWords] = useState([]);

  useEffect(() => {
    const randomSet = wordSets[Math.floor(Math.random() * wordSets.length)];
    setImageWords(randomSet);

    const randomPositions = getRandomPositions(fixedPositions, 5);
    randomPositions.unshift({ x: 350, y: 200 }); // 첫 번째 이미지는 고정된 위치에
    setPositions(randomPositions);
  }, []);

  const handleInputChange = (index, event) => {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const correctAnswers = imageWords.map((item) => item.word);
    const isCorrect = correctAnswers.every((word, index) => word === answers[index]);

    if (isCorrect) {
      alert('정답입니다!');
    } else {
      alert('틀렸습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div>
      <div id="quiz06-container">
        {imageWords.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={`img-${index}`}
            className={`img ${index === 0 ? 'start-img' : ''}`}
            style={{ left: positions[index]?.x, top: positions[index]?.y }}
          />
        ))}
      </div>
      <div id="answer06-container">
        {answers.map((answer, index) => (
          <input
            key={index}
            type="text"
            value={answer}
            className='txt-boxes'
            onChange={(e) => handleInputChange(index, e)}
          />
        ))}
        <button onClick={checkAnswers}>제출</button>
      </div>
    </div>
  );
};

export default Quiz06;
