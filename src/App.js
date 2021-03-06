import './App.css';
// import { Router, Switch } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Explore from './Pages/Explore/Explore';
import Footer from './Pages/Shared/Header/Footer/Footer';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import DashBoArd from './Pages/DashBoArd/DashBoArd';
import Pay from './Pages/DashBoArd/User/Pay/Pay';
import MyOrders from './Pages/DashBoArd/User/MyOrders/MyOrders';
import Review from './Pages/DashBoArd/User/Review/Review';
import MakeAdmin from './Pages/DashBoArd/Admin/MakeAdmin/MakeAdmin';
import GetReview from './Pages/Home/GetReview/GetReview';
import ManageAllProduct from './Pages/DashBoArd/Admin/ManageAllProduct/ManageAllProduct';
import AddaProduct from './Pages/DashBoArd/Admin/AddaProduct/AddaProduct';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoArd></DashBoArd>
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/manageallproducts">
              <ManageAllProduct></ManageAllProduct>
            </PrivateRoute>
            <PrivateRoute path="/addaproduct">
              <AddaProduct></AddaProduct>
            </PrivateRoute>
            <Route path="/getreview">
              <GetReview></GetReview>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
