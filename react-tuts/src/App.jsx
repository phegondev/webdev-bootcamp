import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {


  const titleToDisplay = "Props Title";

  return (

    <BrowserRouter>

      <div className='app'>
        <Navbar title={titleToDisplay} />

        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  )
}
export default App;