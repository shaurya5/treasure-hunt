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
              Okay, so the objective of this game is to impress your partner, assuming you find her/him in the first place. 
              We hope you enjoy the game, please start the game.
              <br />
              You get a link from your crush and you click on it and it's empty. This seems like an elaborate scheme to make you prove your worth.
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
              You seem to be moving in the right direction. You receieve an email but due to a disk defragmentation issue, that email was split into multiple files
              <br />
              <p style={{ color: "yellow", display: "inline" }}>
                Try to append all of them and dec0d3 the message &lt;3
              </p>
            </Fragment>
          }
        />
      ),
    },
    {
      path: "/whatyougonnado",
      component: (
        <Main
          url="https://res.cloudinary.com/douppfjs1/image/upload/fl_attachment/v1659352336/round1_qrmnsf.jpg"
          content={
            <Fragment>
              You look around and find a map lying on the ground, will this map finally help you find a date or not?
              Well, let's find out shall we?{" "}
              The map has the following coordinates circled, let's see if you can figure out where your partner is by triangulating the location
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
              Hiya! You finally find the place where your date is :){" "}
              But let's see if you are able to persuade your partner enough to have dinner with you
              <br />
              See if you can{" "}
              <p style={{ color: "yellow", display: "inline" }}>
                channel
              </p>{" "}
              some ideas to impress your partner
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
              Hooray!!! Planning a moon light dinner definitely charmed your partner
              But let's see if your partner will agree to go out with you before sunrise.{" "}
              <p style={{ color: "yellow", display: "inline" }}>Sharpen</p>{" "}
              your mind, and find out if you can convince your partner to go out
            </Fragment>
          }
        />
      ),
    },
    {
      path: "/Pool7",
      component: (
        <Main
          value="4"
          url="https://res.cloudinary.com/douppfjs1/image/upload/fl_attachment/v1643274935/fourth_pjvfba.png"
          content={
            <Fragment>
              Loki has joined the TIME KEEPERS and is investigating the murder of a woman. The woman seems to be of pale complexion and long red hair from Greenwich. She had been found dead in her arpartment, with a deep wound in her neck. The scene was clean, almost too clean, and there were no signs of forced entry.<br />
              Loki surveyed the room, his eyes scanning the furniture, the walls, and the floor for any clues. Suddenly, his attention was drawn to her laptop running ubuntu with the number 1681483848 typed on it. On talking to her neighbours John found out that this was just the victim's secondary home which she used once in a while, and that they hadn't seen her enter the house or exit it in the last 6 months.<br />
              The only way to solve the case was to go through the CCTV footage of the previous 6 months, but that's a tedious task and Loki is a lazy man. So he sat and wondered if there was any way to find out the exact date and time of the murder so that he can he can travel back to that time instant and prevent the murder. <br />
              Help Loki solve the case.
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
