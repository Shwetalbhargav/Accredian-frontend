import React from 'react';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import ReferralForm from '../components/ReferralForm';
import Footer from '../components/Footer';

function ReferralPage() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <main>
        <section>
          <ReferralForm />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default ReferralPage;
