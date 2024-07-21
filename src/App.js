
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReferralPage from './pages/ReferralPage';
import FAQPage from './pages/FAQPage';
import ReferralForm from './components/ReferralForm';





function App() {
  return (
   
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/referral" element={<ReferralPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/ReferralForm" element = {<ReferralForm/>}/>
       
      </Routes>
    </Router>
      
    
  );
}

export default App;
