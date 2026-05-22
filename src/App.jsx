import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListingsPage from './pages/ListingsPage';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/buy"     element={<ListingsPage type="buy" />} />
            <Route path="/sell"    element={<ListingsPage type="sell" />} />
            <Route path="/rentals" element={<ListingsPage type="rentals" />} />
            <Route path="/build"   element={<ListingsPage type="build" />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
