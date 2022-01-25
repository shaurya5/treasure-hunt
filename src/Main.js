import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Main(props) {
  // const navigate = useNavigate();

  const data = [
    {
      url: '1',
      value: "data",
    },
    {
      url: '2',
      value: "data",
    },
    {
      url: '3',
      value: "data",
    },
    {
      url: '4',
      value: "data",
    },
    {
      url: '5',
      value: "data",
    },
  ];

  // function updateInputValue(e) {
  //   const val = e.target.value;
  //   setInputValue(val);
  // }

  // function validateAns() {
  //   if (inputValue === data[0].value) {
  //     alert("Correct");
  //     navigate("/2");
  //     setInputValue("");
  //   } else {
  //     alert("Wrong");
  //   }
  // }

  // const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <img src={require("./images/" + props.value + ".jpg")} />
      {/* <input
        type="text"
        placeholder="answer"
        onChange={(e) => updateInputValue(e)}
      />
      <button onClick={validateAns}>Submit</button> */}
    </div>
  );
}

export default Main;
