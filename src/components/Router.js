import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../layout/'
import Home from '../pages/Home';
import Error from '../pages/404';
import Location from '../pages/Location';
import About from '../pages/About';

export default function Router() {
  return (
    <Routes>
      <Route path ="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/error/" element={<Error />} />
        <Route path="*" element={<Error />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
