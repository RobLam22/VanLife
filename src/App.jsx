import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { Vans } from './components/Vans';
import { Layout } from './components/Layout';
import { VanDetail } from './components/VanDetail.jsx';
import { Host } from './components/Host.jsx';
import { Income } from './components/Income.jsx';
import { Reviews } from './components/Reviews.jsx';
import './App.css';
import '../server.js';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/host" element={<Host />} />
                    <Route path="/income" element={<Income />} />
                    <Route path="/reviews" element={<Reviews />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Vans />} />
                    <Route path="/vans/:id" element={<VanDetail />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
