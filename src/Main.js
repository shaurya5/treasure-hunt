import React, { useState } from "react";
import styles from "./styles/main.module.css";
import Overlay from "react-bootstrap/Overlay";
import "bootstrap/dist/css/bootstrap.css";

function Main(props) {
  // const navigate = useNavigate();
  const [score, setScore] = useState(0);

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
          <li style={{ color: "#fcdf03" }}>
            Click the button on the final page as soon as
            you get there to stop the timer. Your submission won't be
            considered if you don't click on it.
          </li>
        </ol>
      </div>
      <div className={styles.header}>
        <h1 className={styles.heading}>{props.content}</h1>
        <a className={styles.link} href={props.url}>
          Click here to download the image
        </a>
      </div>
      <div className={styles.linkDiv}></div>
    </div>
  );
}

export default Main;
