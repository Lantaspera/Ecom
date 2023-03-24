import {Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/Home';
import PagenotFound from './pages/PagenotFound';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<PagenotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
