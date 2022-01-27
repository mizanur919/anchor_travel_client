import logo from "./logo.svg";
import "./App.css";
import Home from "../src/Pages/Home/Home/Home";
import NotFound from "../src/Pages/NotFound/NotFound";
import Header from "../src/Pages/Shared/Header/Header";
import Footer from "../src/Pages/Shared/Footer/Footer";
import Login from "../src/Pages/Login/Login";
import Signup from "../src/Pages/Login/Signup/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AllServices from "./Pages/AllServices/AllServices";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Cart from "./Pages/Cart/Cart";
import { Placeholder } from "react-bootstrap";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import Blogs from "./Pages/Dashboard/Blogs/Blogs";
import AllBlogs from "./Pages/AllBlogs/AllBlogs";
import BlogDetails from "./Pages/AllBlogs/BlogDetails/BlogDetails";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/allServices">
              <AllServices></AllServices>
            </Route>
            <Route exact path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/cart">
              <Cart></Cart>
            </Route>
            <Route exact path="/allBlogs">
              <AllBlogs></AllBlogs>
            </Route>
            <Route exact path="/blogView/:serviceId">
              <BlogDetails></BlogDetails>
            </Route>
            <Route exact path="/manageOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <PrivateRoute path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/blogPost">
              <Blogs></Blogs>
            </PrivateRoute>
            <PrivateRoute exact path="/servicedetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="/servicedetailsView/:serviceId">
              <ServiceDetails></ServiceDetails>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
