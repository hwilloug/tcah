import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import BookPage from './components/BookPage';
import ContactPage from './components/ContactPage';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from '@mui/material/Link'


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
            <Route path='sitemap' element={<Sitemap />} />
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

function Sitemap() {
  return (
    <List>
      <ListItem><Link href='/'>Home</Link></ListItem>
      <ListItem><Link href='about'>About Us</Link></ListItem>
      <ListItem><Link href='book'>Book an Appointment</Link></ListItem>
      <ListItem><Link href='contact'>Contact Us</Link></ListItem>
    </List>
  )
}