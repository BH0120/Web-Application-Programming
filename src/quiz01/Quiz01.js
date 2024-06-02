import React from 'react';
import { FaArrowRotateRight } from "react-icons/fa6";

function Quiz01(props) {
    return (
        <>
            <h2>다음 그림이 오른쪽 방향으로 90° 회전했을 때 어떤 모양이 되는 지 골라보세요.</h2>
            <div className="QuizContainer">
                <div id='QuizBlockBox'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ux6b26C7E5tu4xKPTtRD9k6BIWWocpRlYw&s" alt="" />
                </div>

                <div>
                    <FaArrowRotateRight style={{height: '60px',width:'60px'}}/>
                </div>

                <div id='QuestionMarkBox'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ux6b26C7E5tu4xKPTtRD9k6BIWWocpRlYw&s" alt="" style={{transform: 'rotate(90deg)'}}/>
                </div>
            </div>
        </>
    );
}

export default Quiz01;