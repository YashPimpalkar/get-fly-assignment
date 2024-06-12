import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route  ,Navigate} from "react-router-dom";
import Dashboard from './pages/Dashboard/dashboard';
import Notification from './pages/notification/Notification';
import Faqs from './pages/faqs/Faqs';
import PastSeminar from './pages/pastseminar/PastSeminar';
import Application from './pages/driveApplication/Application';
import PastDrives from './pages/pastdrive/PastDrive';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
   
      <Navbar />
      
        <main className="main-content">
       <Routes>
         <Route path="/"  element={<Navigate to="/Dashboard" />} />
         <Route path="/Dashboard" element={<Dashboard />} />
         <Route path="/notification" element={<Notification />} />
         <Route path="/faqs" element={<Faqs />} />
         <Route path="/past-drives" element={<PastDrives />} />
         <Route path="/drive-application" element={<Application />} />
         {/* Define other routes that you need*/}
       </Routes>
       <Footer />
     </main>
   
       
    </div>
  );
}

export default App;
