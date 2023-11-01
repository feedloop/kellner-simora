import React from 'react';
import Navbar from './organisms/navbar';
import Footer from './organisms/footer';

function Template({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
      <Footer/>
    </main>
  );
}

export default Template;
