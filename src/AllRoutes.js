import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./Main";
import FinalPage from "./FinalPage";
import LandingPage from "./LandingPage";

function AllRoutes() {
  
  const pages = [
    {
      path: '/',
      component: <LandingPage />
    },
    {
      path: '/start',
      component: <Main value='1' />
    },
    {
      path: '/nano',
      component: <Main value='2' />
    },
    {
      path: '/',
      component: <Main value='3' />
    },
    {
      path: '/2',
      component: <Main value='4' />
    },
    {
      path: '/',
      component: <Main value='5' />
    },
    {
      path: '/gacho',
      component: <FinalPage />
    }
  ]
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
