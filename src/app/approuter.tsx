import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../pages/index';
import Workflow from '../pages/workflow';
import VisualIdentity from '../pages/visual-identity';
import Works from '../pages/works';
import About from '../pages/about';
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
        <Route path="/visual-identity" element={<VisualIdentity />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/reources" element={<Resources />} />*/}
        <Route path="/posts/website-goals" element={<Post1 />} />
       {/* <Route path="/posts/cibersecurity-resources" element={<Post2 />} />*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
