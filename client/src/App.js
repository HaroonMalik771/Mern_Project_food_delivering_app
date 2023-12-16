import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CartScreen from './screens/CartScreen';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
