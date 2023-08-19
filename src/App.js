import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Footer from './components/layout/Footer'
import NewProject from './components/pages/NewProject'
import NavBar from './components/layout/NavBar'
import Project from './components/pages/Project'

import Container from './components/layout/Container';
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
            <Route path="/project/:id" element={<Project/>} />

        </Routes>
      </Container>
        <Footer />
    </Router>
  );
}

export default App;
