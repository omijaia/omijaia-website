import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../pages/index';
import Workflow from '../pages/workflow';
import Works from '../pages/works';
import About from '../pages/information';
import GetInTouch from '../pages/get-in-touch';
{/*import Resources from '../pages/resources';*/}
{/*import Post2 from '../pages/posts/cibersecurity-resources';*/}
import Post1 from '../pages/posts/websites-goals';
import NotFound from '../pages/404';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/works" element={<Works />} />
        <Route path="/information" element={<About />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        {/*<Route path="/reources" element={<Resources />} />*/}
        <Route path="/posts/website-goals" element={<Post1 />} />
       {/* <Route path="/posts/cibersecurity-resources" element={<Post2 />} />*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
