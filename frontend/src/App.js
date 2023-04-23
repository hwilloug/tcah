import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import BookPage from './components/BookPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='book' element={<BookPage />} />
          </Routes>        
        </BrowserRouter>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
