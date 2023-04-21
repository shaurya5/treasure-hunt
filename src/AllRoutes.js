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
              Okay, so the objective of this game is to crack the case of the murder and find the culprit, assuming you find her/him in the first place.
              We hope you enjoy the game, please start the game.
              <br />
              You click on the link sent to your phone, you realize that it leads you to a game. You can't help but wonder if this is an elaborate scheme to make you prove your worth.
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
              As you play the game, you receive an email with important information. However, due to a disk defragmentation issue, the email was split into multiple files. You begin to wonder if this information will help you finally find the criminal.<br />
              <p style={{ color: "yellow", display: "inline" }}>
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
              The only witness to the "freak accident" is a crazy old coot who uttered only the words "Count them!" when questioned by the police. 
              You receive a letter with a piece of paper containing a long string of alphabets and some numbers separated by commas. 
              The sender provides one clue: "The key is to count"

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
              As luck would have it, you finally figure out the date and check the cc tv footage only to realize the victim had hidden a map. 
              The map has specific coordinates circled, and you realize that triangulating the location could lead you to your criminal. 
              Will this map finally help you? There's only one way to find out.{" "}
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
              You finally arrive at the location on the map and find a witness waiting for you. 
              However, persuading your witness is not an easy task. 
              You must use all of your charm and wit to win them over
              <br />
              See if you can{" "}
              <p style={{ color: "yellow", display: "inline" }}>
                channel
              </p>{" "}
              some ideas to impress them
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
              After planning a moonlight dinner, you are ecstatic to discover that your efforts have charmed him. 
              However, there is still one more hurdle to overcome. 
              Your partner must agree to tell the story before sunrise{" "}
              <p style={{ color: "yellow", display: "inline" }}>Sharpen</p>{" "}
              your mind, and find out if you can convince the witness to reveal the criminal
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
