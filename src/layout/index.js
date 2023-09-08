import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout-content"><Outlet /></main>
      <Footer />
    </div>
  );
};

export default Layout;
