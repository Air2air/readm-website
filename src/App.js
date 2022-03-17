import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/styles.scss'

const App = () => (
  <>
    <Router>
      <NavBar />
      {/* <Banner /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    <br />
    <br />
  </>
)
export default App
