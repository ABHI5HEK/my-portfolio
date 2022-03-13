import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Nav from './components/nav/Nav';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Contact/>
    <Experience/>
    </>
  );
}

export default App;
