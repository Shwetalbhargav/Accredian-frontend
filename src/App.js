
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReferralPage from './pages/ReferralPage';
import FAQPage from './pages/FAQPage';
import ReferralForm from './components/ReferralForm';
import FAQ from './components/FAQ';
import FlowDiagram from './components/FlowDiagram';
import Header from './components/Header';




function App() {
  return (
   
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/referral" element={<ReferralPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/ReferralForm" element = {<ReferralForm/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
        <Route path='/FlowDiagram' element={<FlowDiagram/>}/>
        <Route path='/Header' element={<Header/>}/>
      </Routes>
    </Router>
      
    
  );
}

export default App;
