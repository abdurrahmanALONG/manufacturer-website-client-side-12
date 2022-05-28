import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './CommonPages/Footer/Footer';
import Header from './CommonPages/Header/Header';
import NotFound from './CommonPages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import ShowAllItems from './Pages/Home/ShowAllItems';
import Login from './Pages/Login/Login';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import MyOrders from './Pages/Dashboard/Orders/MyOrders';
import AddAReview from './Pages/Dashboard/AddAReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Registration from './Pages/Login/Registration';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import Users from './Pages/Dashboard/Users';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AddAProduct from './Pages/Dashboard/AddAProduct';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import MakeOrder from './Pages/Home/MakeOrder';




function App() {
  return (
    <div>
      <Header></Header>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/registration" element={<Registration></Registration>}></Route>
          <Route path="/showAllItems" element={<ShowAllItems></ShowAllItems>}></Route>
          <Route path="/item/:itemID" element={
            <RequireAuth>
             <MakeOrder></MakeOrder>
            </RequireAuth>
          }></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/myPortfolio" element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path="Dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route path="MyOrders" element={<MyOrders></MyOrders>}></Route>
            <Route path="AddAReview" element={<AddAReview></AddAReview>}></Route>
            <Route path="MyProfile" element={<MyProfile></MyProfile>}></Route>
            <Route path="ManageProducts" element={<ManageProducts></ManageProducts>}></Route>
            <Route path="AddAProduct" element={<AddAProduct></AddAProduct>}></Route>
            <Route path="ManageAllOrders" element={<ManageAllOrders></ManageAllOrders>}></Route>
            <Route path="Users" element={<Users></Users>}></Route>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div >
  );
}

export default App;
