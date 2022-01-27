import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/landingpage.module.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import { pages } from "./constants";

function LandingPage() {
  const navigate = useNavigate();
  const [inputName, setInputName] = useState();
  const [inputID, setInputID] = useState();
  const [time, setTime] = useState("");

  function handleClick() {
    const today = new Date();
    const timeNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    localStorage.setItem("time_started", timeNow);
    localStorage.setItem("name", inputName);
    localStorage.setItem('ID', inputID);
    if(inputID && inputName && timeNow){
      navigate("/chess");
    }
    else{
      alert('Fill in your details')
    }
  }

  function updateNameValue(e) {
    const name = e.target.value;
    setInputName(name);
  }

  function updateIDValue(e) {
    const id = e.target.value;
    setInputID(id);
  }

  return (
    <div className={styles.wrapper}>
      {/* {console.log(pages)} */}
      <div className={styles.landing}>
        <h1 className={styles.heading1}>Welcome</h1>
        <h1 className={styles.heading2}>Click on the button to start</h1>
        <Button variant="danger" id={styles.btn} onClick={handleClick}>
          Enter
        </Button>
      </div>
      <div className={styles.rules}>
        <h1 className={styles.heading3}>RULES</h1>
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
            Clicking the above button starts the timer. As soon as you finish
            all the challenges, click the button on the final page to stop the
            timer.
          </li>
        </ol>
      </div>
      <div className={styles.info}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          onChange={(e) => updateNameValue(e)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="ID"
          onChange={(e) => updateIDValue(e)}
        />
      </div>
    </div>
    
  );
}

export default LandingPage;
