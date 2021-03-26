import {BrowserRouter as Router,Route} from "react-router-dom";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import about from "./pages/about"
import contact from "./pages/contact"
import resume from "./pages/resume"
import projects from "./pages/projects"

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />

        <Route exact path="/about"component={about}/>
        <Route exact path="/contact"component={contact}/>
        <Route exact path="/resume"component={resume}/>
        <Route exact path="/projects"component={projects}/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
