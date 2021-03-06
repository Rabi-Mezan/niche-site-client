import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar/Navbar';
import Home from './pages/Home/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './pages/Shared/Footer/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';
import Store from './pages/Store/Store';
import Details from './pages/Deatils/Details';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import BuyNow from './pages/BuyNow/BuyNow';
import Authprovider from './context/Authprovider';
import Myorders from './pages/Myorders/Myorders';
import Wishlist from './pages/Wishlist/Wishlist';
import MakeAdmin from './pages/Admin/MakeAdmin/MakeAdmin';


function App() {
  return (
    <div className="App">

      <Authprovider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/store'>
              <Store></Store>
            </Route>
            <Route path='/details/:id'>
              <Details></Details>
            </Route>
            <Route path='/myorders'>
              <Myorders></Myorders>
            </Route>
            <Route path='/wishlist'>
              <Wishlist></Wishlist>
            </Route>
            <Route path='/makeadmin'>
              <MakeAdmin></MakeAdmin>
            </Route>
            <PrivateRoute exact path='/buynow/:id'>
              <BuyNow></BuyNow>
            </PrivateRoute>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
