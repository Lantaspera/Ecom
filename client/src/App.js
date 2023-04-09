import {Routes, Route} from 'react-router-dom'
import AdminRoute from './components/Routes/AdminRoute';
import PrivateRoute from './components/Routes/Private';
import About from './pages/About';
import AdminDashboard from './pages/admin/AdminDashboard';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

import PagenotFound from './pages/PagenotFound';
import Dashboard from './user/Dashboard';
import CreateCategory from './pages/admin/CreateCategory';
import CreateProduct from './pages/admin/CreateProduct';
import Users from './pages/admin/Users';
import Products from './pages/admin/Products';
import UpdateProduct from './pages/admin/UpdateProduct';
import Orders from './user/Orders';
import HomePage from './pages/HomePage';
import Search from './pages/Search';
import ProductDetails from './pages/ProductDetails';
import Categories from './pages/Categories';
import CategoryProduct from './pages/CategoryProduct';
import CartPage from './pages/CartPage';
import Profile from './user/Profile';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path='/categories' element={<Categories/>}/>
        <Route path='/category/:slug' element={<CategoryProduct/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<PrivateRoute/>}>
          <Route path="user" element={<Dashboard/>}/>
          <Route path="user/orders" element={<Orders />} />
          <Route path="user/profile" element={<Profile />} />
        </Route>
        <Route path='/dashboard' element={<AdminRoute/>}>
          <Route path="admin" element={<AdminDashboard/>}/>
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users/>} />
        </Route>
        <Route path='*' element={<PagenotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
