import React, { useState, useEffect } from "react";
import "./Test2.css";

const images = [
    "/imgs/도형1.png",
    "/imgs/도형2.png",
    "/imgs/도형3.png",
    "/imgs/도형4.png",
];

function rotateImage(deg) {

    if (deg === 90) {
        return `rotate-${deg}`;
    } else {

        let randDeg = 0;

        while (randDeg === deg || randDeg === 90 ) {
            randDeg = Math.floor(Math.random() * 4) * 45;
        }

        return `rotate-${randDeg}`;
    }
}

function generateRandomOptions(randomImage) {
    //정답 이미지(90도 회전)
    const rotatedImage = { img: randomImage, class: rotateImage(90) };

    const optionImages = [
        rotatedImage,
        { img: randomImage, class: rotateImage(0) },
        { img: randomImage, class: rotateImage(0) },
    ];
    // Shuffle options
    optionImages.sort(() => Math.random() - 0.5);

    return { optionImages, rotatedImage };
}

function Test2() {
    const [currentImage, setCurrentImage] = useState(null);
    const [options, setOptions] = useState([]);
    const [correctOption, setCorrectOption] = useState(null);

    useEffect(() => {
        generateQuiz();
    }, []);

  function generateQuiz() {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const { optionImages, rotatedImage } = generateRandomOptions(randomImage);
    setCurrentImage(randomImage);
    setOptions(optionImages);
    setCorrectOption(rotatedImage);
  }

  function checkAnswer(selectedOption) {
    if (selectedOption === correctOption) {
      alert("정답입니다!");
    } else {
      alert("오답입니다. 다시 시도해주세요.");
    }
  }

  return (
    <div className="quiz-container">
      <div className="quiz-block">
        <img src={currentImage} alt="Quiz" />
      </div>
      <div className="answer-container">
        {options.map((option, index) => (
          <img
            key={index}
            src={currentImage}
            alt={`Option ${index + 1}`}
            onClick={() => checkAnswer(option)}
            className={`answer-option ${option.class}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Test2;
