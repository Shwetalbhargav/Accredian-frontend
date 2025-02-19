import React from 'react';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Article from '../components/Article';
import Sidebar from '../components/Sidebar';
import Table from '../components/Table';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import FlowDiagram from '../components/FlowDiagram';
import Header from '../components/Header';
import moneyImage from "../assests/money1.png";

function HomePage() {
  return (
    <>
      <Header/>
      <Navbar1 />
      <Navbar2 />
      <main>
        <section className="relative">
          <Article />
          {/* Money Images inside Article */}
          <div className="relative">
          <img src={moneyImage} alt="Money" className="absolute top-[-15rem] left-[10rem] w-32 h-auto" />
            <img src={moneyImage} alt="Money" className="absolute top-[-40rem] right-[10rem] w-32 h-auto" />
            <img src={moneyImage} alt="Money" className="absolute bottom-[-50rem] left-[25rem] w-32 h-auto" />
            <img src={moneyImage} alt="Money" className="absolute bottom-[-2rem] right-[10rem] w-32 h-auto" />
          </div>
          <div className="my-20"></div>
          <FlowDiagram/>
        </section>
        <aside>
          <Table />
        </aside>
        <FAQ/>
        <section>
          <button onClick={() => window.location.href = '/ReferralForm'}>Referral</button>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
