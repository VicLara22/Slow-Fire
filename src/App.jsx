import './App.css'
import Home from './page/Home/Home.jsx';
import { Route, Routes } from 'react-router-dom';
import Products from './page/Products/Products';
import Contact from './page/Contact/Contact';
function App() {
  return (
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
  )
}

export default App;
