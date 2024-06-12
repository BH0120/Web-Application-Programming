import React from "react";
import "./SampleContainer.css";

function SampleContainer(props) {
  const samples = props.samples;

  return (
    <div className="sample-container">
      <div className="sample-txt-container">
        <div style={{gridColumn: "span 5", borderBottom: "1px solid", backgroundColor:"#e0e0e0"}}>보기</div>
        {samples.map((sample, idx) => (
          <div key={idx} className="samples-div">
            {sample.char}&nbsp;&nbsp;&nbsp;{sample.value}
          </div>
        ))}
      </div>
      <div className="example-div">
        <p className="example-txt">예시)</p> <p className="chinese">二十三</p>{" "}
        <p>+</p> <p className="chinese">四十六</p> <p>=</p>{" "}
        <p className="chinese">?</p>
        <p>23</p> <p> </p> <p>46</p> <p> </p> <p>69</p>
      </div>
    </div>
  );
}

export default SampleContainer;
