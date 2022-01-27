import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Main from "./Main";
import FinalPage from "./FinalPage";
import LandingPage from "./LandingPage";
import Error from "./Error";
import Ending from "./Ending";

// import { pages } from './constants';

// function updatePath() {
//   pages.map((page,index) => {
//     switch(index) {
//       case 0:
//         page.value['path']='/start';
//         break;

//       default:
//         page.value['path'] = '/' + pages[index-1].value.answer;
//         break;
//     }
//   })
// }

function AllRoutes() {
  
  const pages = [
    {
      path: "/",
      component: <LandingPage />,
    },
    {
      path: "/chess",
      component: (
        <Main
          value="1"
          url="https://res.cloudinary.com/douppfjs1/image/upload/fl_attachment/v1643274937/first_ifzoz7.png"
          content={
            <Fragment>
              Vision takes a look around him. Tall warrior figures are standing
              on a checkered field. These majestic figures showed him the glory
              of BPHC, and it made him find the treasure even more. First, help
              Vision free himself from the shackles. Vision found a knife near
              him. But the blade is blunt. Help him{" "}
              <p style={{ color: "yellow", display: "inline" }}>sharpen</p> the
              knife.
            </Fragment>
          }
        />
      ),
    },
    {
      path: "/Acadblock953",
      component: (
        <Main
          value="2"
          url="https://res.cloudinary.com/douppfjs1/image/upload/fl_attachment/v1643274938/second_c0t7wl.png"
          content={
            <Fragment>
              Hooray!!! Vision is now free. He resumes his journey once again.
              With newfound determination, he heads towards the place of
              learning. The place where knowledge is spread, and the world’s
              secrets are revealed. He reaches this mysterious groove of
              learning. As soon as he arrives there, some figures emerge from
              beyond the sky. The entire place starts to glow with different{" "}
              <p style={{ color: "yellow", display: "inline" }}>colors</p>. They
              keep{" "}
              <p style={{ color: "yellow", display: "inline" }}>channeling</p>{" "}
              their knowledge as words through the colors. Help Vision Figure
              out what these mysterious figures are trying to convey.
            </Fragment>
          }
        />
      ),
    },
    {
      path: "/Waterfall478",
      component: (
        <Main
          value="3"
          url=""
          content={
            <Fragment>
              Hiya! With his first obstacle cleared, Vision moves forward with
              his Journey. He is traveling to this place where{" "}
              <p style={{ color: "yellow", display: "inline" }}>water falls</p>.
              He reached this place and was awestruck. The water really falls!
              He keeps staring at this miracle of nature. He tries to touch it.
              Suddenly everything turns black and white. He quickly pulls back
              his hand. He feels it again. The same thing happens. He pulls it
              back even more rapidly. Wondering what that was, he thinks.
              Suddenly he hears some voices. They reverberate throughout the
              place. They say, “
              <p style={{ color: "yellow", display: "inline" }}>
                Three Thresholds
              </p>{" "}
              the Tree take thou towards the treasure,{" "}
              <p style={{ color: "yellow", display: "inline" }}>3</p>”
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
              Incredible, you have found the treasure location. But wait! What
              is this? Vision is looking everywhere, but it’s not there! But,
              you are sure that it’s the location. Help Vision. His Senses are
              getting rusty and dull. Help him{" "}
              <p style={{ color: "yellow", display: "inline" }}>sharpen</p>{" "}
              them.
            </Fragment>
          }
        />
      ),
    },
    {
      path: "/Magic57",
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

  // const location = useLocation();
  // localStorage.setItem("score", 0);
  // useEffect(() => {
  //   console.log("");
  // }, [location]);

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

// export { pages };
export default AllRoutes;
