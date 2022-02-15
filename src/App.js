import NavBar from './components/NavBar';
import './styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
