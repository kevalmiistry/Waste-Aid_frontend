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
import FullPost from './components/FullPost'
import { PostProvider } from './Context/Posts/PostContext'
import GenerateToken from './components/GenerateToken'

function App() {
  return (
    <>
      <PostProvider>
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
              <Route exact path='/post/:id' element={<FullPost />} />
              <Route exact path='/generatetoken' element={<GenerateToken />} />
            </Routes>
            <Profile />
          </div>
        </Router>
      </PostProvider>
    </>
  )
}

export default App;
