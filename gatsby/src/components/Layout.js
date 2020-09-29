import React from 'react';
import Footer from './Footer';
import Nav from './nav';

export default function Layout({ element }) {
  return (
    <div>
      <Nav />
      <p>{element}</p>
      <Footer />
    </div>
  );
}
