import React from 'react';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

function FAQPage() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <main>
        <section>
          <FAQ />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default FAQPage;
