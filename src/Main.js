import React, { useState, useRef } from "react";
import styles from "./styles/main.module.css";
import {
  OverlayTrigger,
  Button,
  Tooltip,
  Popover,
  Overlay,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Main(props) {
  // const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
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
      {/* <div className={styles.rules}>
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
            Click the button on the final page as soon as you get there to stop
            the timer. Your submission won't be considered if you don't click on
            it.
          </li>
        </ol>
      </div> */}
      <div className={styles.header}>
        <h1 className={styles.heading}>{props.content}</h1>
        <a className={styles.link} href={props.url}>
          Click here to download the image
        </a>
      </div>
      <div className={styles.rules} ref={ref}>
        <Button className={styles.btnRules} onClick={handleClick}>See Rules</Button>

        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref}
          containerPadding={20}
        >
          <Popover style={{border: '1px solid white', borderRadius: '0'}} id="popover-contained">
            <Popover.Header as="h3">Rules</Popover.Header>
            <Popover.Body>
              <ol className={styles.list}>
                <li>You will be given an image. Download it.</li>
                <li>
                  You have to decode the image using OpenCV and find out the
                  answer.
                </li>
                <li>
                  Suppose your answer is 'horse'. Change the url to
                  <strong> treasure-hunt-techweek.netlify.app/horse</strong> to proceed to the next question.
                </li>
                <li style={{ color: "#fcdf03" }}>
                  Click the button on the final page as soon as you get there to
                  stop the timer. Your submission won't be considered if you
                  don't click on it.
                </li>
              </ol>
            </Popover.Body>
          </Popover>
        </Overlay>
      </div>
    </div>
  );
}

export default Main;
