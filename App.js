 import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import NavBar from './NavBar';
import Game from './Game';
import ContactPage from './ContactPage';
import Footer from './Footer';
function App() {
  return (
    
    <Router>

    <div className="flex flex-col min-h-screen">
      <NavBar />  
      <main className="flex-grow">
        <Routes>
        <Route path="/" element={<Game />} />  
            <Route path="/contact" element={<ContactPage />} />   
          </Routes>
        </main>
        <Footer className="mt-auto"/>
      </div>
    </Router>
  );
}

export default App;
   