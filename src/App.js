import './styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import AddPost from './components/AddPost'
import AidMan from './components/AidMan'

function App() {
  return (
    <>
      <Router>
        <div className="app-container">
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/addpost' element={<AddPost />} />
            <Route exact path='/aidman' element={<AidMan />} />
          </Routes>
          <Profile />
        </div>
      </Router>
    </>
  )
}

export default App;
