import {Routes, Route} from 'react-router-dom'
import AdminRoute from './components/Routes/AdminRoute';
import PrivateRoute from './components/Routes/Private';
import About from './pages/About';
import AdminDashboard from './pages/admin/AdminDashboard';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/Home';
import PagenotFound from './pages/PagenotFound';
import Dashboard from './user/Dashboard';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<PrivateRoute/>}>
          <Route path="" element={<Dashboard/>}/>
        </Route>
        <Route path='/dashboard' element={<AdminRoute/>}>
          <Route path="admin" element={<AdminDashboard/>}/>
        </Route>
        <Route path='*' element={<PagenotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
