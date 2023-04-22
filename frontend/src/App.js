import Footer from './components/Footer';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <LandingPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
