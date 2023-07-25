import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer/>
    </div>
  );
}

export default App;
