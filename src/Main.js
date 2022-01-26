import React, { useState } from "react";
import styles from "./styles/main.module.css";
import Overlay from "react-bootstrap/Overlay";
import "bootstrap/dist/css/bootstrap.css";
import {
  OverlayTrigger,
  PopoverBody,
  PopoverHeader,
  Button,
} from "react-bootstrap";
import { Popover } from "bootstrap";
import { Tooltip } from "bootstrap";

function Main(props) {
  // const navigate = useNavigate();
  const [score, setScore] = useState(0);
  // const data = [
  //   {
  //     url: '1',
  //     value: "data",
  //   },
  //   {
  //     url: '2',
  //     value: "data",
  //   },
  //   {
  //     url: '3',
  //     value: "data",
  //   },
  //   {
  //     url: '4',
  //     value: "data",
  //   },
  //   {
  //     url: '5',
  //     value: "data",
  //   },
  // ];

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
    <div className={styles.wrapper}>
      {/* <img className={styles.image} src={require("./images/" + props.value + ".jpg")} /> */}
      {/* 
      <button onClick={validateAns}>Submit</button> */}
      <div className={styles.rules}>
        <p className={styles.head}>RULES</p>
        <ol className={styles.list}>
          <li>You will be given an image. Download it.</li>
          <li>
            You have to decode the image using OpenCV and find out the answer.
          </li>
          <li>
            Suppose your answer is 'horse'. Change the url to abc.com/horse to
            proceed to the next question.
          </li>
        </ol>
      </div>
      <div className={styles.header}>
        <h1 className={styles.heading}>{`Question ${props.value}`}</h1>
      </div>
      <div className={styles.linkDiv}>
        <a className={styles.link} href={props.url}>
          Click here to download the image
        </a>
      </div>
    </div>
  );
}

export default Main;
