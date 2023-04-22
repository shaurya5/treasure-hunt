import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from "./Main";
import FinalPage from "./FinalPage";
import LandingPage from "./LandingPage";
import Error from "./Error";
import Ending from "./Ending";

function AllRoutes() {

  const pages = [
    {
      path: "/",
      component: <LandingPage />,
    },
    {
      path: "/home",
      component: (
        <Main
          url=""
          content={
            <Fragment>
              You are a detective trying to solve a murder case. You have been working on this case 
              for months, and you are feeling frustrated because you can't seem to find any leads. One 
              day, you receive an anonymous email inviting you to play a game that promises to help you 
              crack the case.
              <br />
              <p style={{ color: "yellow", display: "inline" }}>
                Inspect it
              </p>
            </Fragment>
          }
        />
      ),
    },
    {
      path: "/enc0d3d",
      component: (
        <Main
          url="https://drive.google.com/drive/folders/18pz3MmC2b81Iur7ArpRhlllD5-DXdHiE?usp=sharing"
          content={
            <Fragment>
              On the home page, you discover that the victim was a wealthy businessman with many enemies. You also learn that the only witness to the crime is a crazy old coot who mumbles something about "counting." You receive a letter with a long string of letters and numbers, and a clue that the key is to count. You must figure out how to decode the message to move on to the next level<p style={{ color: "yellow", display: "inline" }}>
                Try to append all of them and dec0d3 the message &lt;3
              </p>
            </Fragment>
          }
        />
      ),
    },
    {
      path: "/base64",
      component: (
        <Main
          url="https://drive.google.com/file/d/1gTG_kaV_TgHxRAXZFnBpyrhUS4pWnArs/view?usp=share_link"
          content={
            <Fragment>
              On the home page, you discover that the victim was a wealthy businessman with many enemies. You also learn that the only witness to the crime is a crazy old coot who mumbles something about "counting." You receive a letter with a long string of letters and numbers, and a clue that the key is to count. You must figure out how to decode the message to move on to the next level.


              <p style={{ color: "yellow", display: "inline" }}>
              Encoded Message : 3-5-3-5-3-7
              </p>
            </Fragment>
          }
        />
      ),
    },
    {
      path: "/ididit",
      component: (
        <Main
          url=""
          content={
            <Fragment>
              You seem to have found a computer's ssh credentials. You get onto your computer and try to decode it. You are greeted with a message.
              Your curiosity piqued, you investigate and discover that the computer belongs to a victim in a murder case. 
              The only way to solve the case is to go through six months' worth of CCTV footage, a daunting task. 
              You wonder if there's a way to travel back in time to <u>day</u> of the murder. <br />
              <p style={{ color: "yellow", display: "inline" }}>
              "Welcome to Ubuntu: 1681483848 :)" 
              </p>
            </Fragment>
          }
        />
      ),
    },
    {
      path: "/friday",
      component: (
        <Main
          url="https://res.cloudinary.com/douppfjs1/image/upload/fl_attachment/v1659352336/round1_qrmnsf.jpg"
          content={
            <Fragment>
              On the home page, you discover that the victim was a wealthy businessman with many enemies. You also learn that the only witness to the crime is a crazy old coot who mumbles something about "counting." You receive a letter with a long string of letters and numbers, and a clue that the key is to count. You must figure out how to decode the message to move on to the next level.{" "}
              The map has the following coordinates circled, let's see if you can figure it out by triangulating the location
              <p style={{ color: "yellow", display: "inline" }}>
                <br />(75,624,0) -&gt; (21,6624,2) -&gt;
                <br />(0,6433,1) -&gt; (1896,8050,1) -&gt;
                <br />(13,6552,2) -&gt; (113,7054,1) -&gt;
                <br />(329,6967,2) -&gt; (506,6442,0) -&gt;
                <br />(63,8361,1) -&gt; (601,241,0)
                <br />(165,6950,0)
              </p>
            </Fragment>
          }
        />
      ),
    },
    {
      path: "/nvrgnagivup",
      component: (
        <Main
          url="https://res.cloudinary.com/douppfjs1/image/upload/fl_attachment/v1659355316/round2_ztsipo.png"
          content={
            <Fragment>
             As you progress through the game, you begin to piece together clues and evidence that lead you closer to the truth. You realize that the murder was not a random act of violence, but a calculated and premeditated crime committed by someone with a motive. You must use all your detective skills to uncover the truth and bring the culprit to justice.


              <br />
              See if you can{" "}
              <p style={{ color: "yellow", display: "inline" }}>
                channel
              </p>{" "}
              your inner sherlock
            </Fragment>
          }
        />
      ),
    },
    {
      path: "/mo0nl1t",
      component: (
        <Main
          url="https://res.cloudinary.com/douppfjs1/image/upload/fl_attachment/v1659352433/round3_nye2s8.png"
          content={
            <Fragment>
              You are ecstatic to discover that your efforts have charmed him. 
              However, there is still one more hurdle to overcome. 
              Your partner must agree to the crime{" "}
              <p style={{ color: "yellow", display: "inline" }}>Sharpen</p>{" "}
              your mind, and find out if you can convince him to reveal the criminal
            </Fragment>
          }
        />
      ),
    },
    {
      path: "/conf35s",
      component: <FinalPage />,
    },
    {
      path: "/end-event21",
      component: <Ending />,
    },
    {
      path: "/*",
      component: <Error />,
    },
  ];

  return (
    <Router>
      <Routes>
        {pages.map((page, index) => (
          <Route path={page.path} element={page.component} />
        ))}
      </Routes>
    </Router>
  );
}

export default AllRoutes;
