import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/landingpage.module.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";
import { supabase } from "./supabase";

function LandingPage() {
  const navigate = useNavigate();
  const [ inputValue, setInputValue ] = useState("");
  const [ time, setTime ] = useState("");

  const createSong = async () => {
    await supabase
      .from("data")
      .insert([
        {name: inputValue, time_started: time} 
      ])
      .single();
  }

  function handleClick() {
    const today = new Date();
    const timeNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    setTime(timeNow);
    createSong();
    navigate("/start");
  }

  function updateInputValue(e) {
    const val = e.target.value;
    setInputValue(val);
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
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => updateInputValue(e)}
        />
      </div>
      {/* <img src={require('./images/1.jpg')} useMap='#workspace' />

      <map name='workspace'>
        <area shape='rectangle' coords='34,44,270,350' href='https://www.amazon.in' />
      </map> */}
    </div>
  );
}

export default LandingPage;
