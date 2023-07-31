import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Footer from './layout/Footer'
import NewProject from './components/pages/NewProject'
import NavBar from './layout/NavBar'

import Container from './layout/Container';
import Projects from './components/pages/Projects'

function App() {
  return (
    <Router>
      <NavBar />
      <Container customClass="min_height">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newprojects" element={<NewProject />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>
        <Footer />
    </Router>
  );
}

export default App;
