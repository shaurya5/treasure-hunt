import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/landingpage.module.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

function LandingPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/start");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.landing}>
        <h1 className={styles.heading1}>Welcome</h1>
        <h1 className={styles.heading2}>Click on the button to start</h1>
        <Button variant="outline-danger" id={styles.btn} onClick={handleClick}>
          Enter
        </Button>
      </div>
      <div className={styles.rules}>
        <h1 className={styles.heading3}>RULES</h1>
        <ol className={styles.list}>
          <li>You will be given an image. Download it.</li>
          <li>
            You have to decode the image using OpenCV and find out the
            answer.
          </li>
          <li>
            Suppose your answer is 'horse'. Change the url to abc.com/horse to
            proceed to the next question.
          </li>
        </ol>
      </div>
      {/* <img src={require('./images/1.jpg')} useMap='#workspace' />

      <map name='workspace'>
        <area shape='rectangle' coords='34,44,270,350' href='https://www.amazon.in' />
      </map> */}
    </div>
  );
}

export default LandingPage;
