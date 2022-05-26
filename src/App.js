import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/Signup';
import Loading from './components/Loading';
import Checkout from './Pages/Purchase/Checkout';
import RequireAuth from './RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Addreview from './Pages/Dashboard/Addreview';
import Myorders from './Pages/Dashboard/Myorders';
import Myprofile from './Pages/Dashboard/Myprofile';
import Payment from './Pages/Dashboard/Payment';
import Alluser from './Pages/Dashboard/Alluser';
import AddProduct from './Pages/Dashboard/AddProduct';
import RequireAdmin from './hooks/RequireAdmin';
import Manageorders from './Pages/Dashboard/Manageorders';
import Manageproducts from './Pages/Dashboard/Manageproducts';
import Blogs from './Pages/Blogs';
import Myportfolio from './Pages/Myportfolio';
import Error from './Pages/Error';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/myportfolio' element={<Myportfolio></Myportfolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/loading' element={<Loading></Loading>}></Route>
        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<Myorders></Myorders>} ></Route>
          <Route path='myreview' element={<Addreview></Addreview>} ></Route>
          <Route path='myhistory' element={<Myprofile></Myprofile>} ></Route>
          <Route path='payment/:id' element={<Payment></Payment>} ></Route>
          <Route path='alluser' element={<RequireAdmin><Alluser></Alluser></RequireAdmin>} ></Route>
          <Route path='manageorders' element={<RequireAdmin><Manageorders></Manageorders></RequireAdmin>} ></Route>
          <Route path='manageproducts' element={<RequireAdmin><Manageproducts></Manageproducts></RequireAdmin>} ></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>} ></Route>


        </Route>
        <Route path='/checkout/:id' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
