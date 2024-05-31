import React from 'react';
import { FaArrowRotateRight } from "react-icons/fa6";
import './Quiz01Container.css'


function Quiz01Container(props) {
    return (
        <div>
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
        </div>
    );
}

export default Quiz01Container;