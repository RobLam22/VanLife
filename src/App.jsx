import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Vans } from './components/Vans';
import { VanDetail } from './components/VanDetail.jsx';
import './App.css';
import '../server.js';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<Vans />} />
                <Route path="/vans/:id" element={<VanDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
