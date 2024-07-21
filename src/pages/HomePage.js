import React from 'react';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Article from '../components/Article';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';
import Footer from '../components/Footer';


function HomePage() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <main>
        <section>
          <Article  />
          
        </section>
        <aside>
          <Sidebar />
          <Table />
        </aside>
        <section>
          <button onClick={() => window.location.href = '/ReferralForm'}>Referral</button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
