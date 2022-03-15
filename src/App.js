import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Contact/>
    
    </>
  );
}

export default App;
