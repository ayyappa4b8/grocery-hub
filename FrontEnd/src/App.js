import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter, Routes,Route, useNavigate} from 'react-router-dom';
import Home from './pages/Home';
import Product from './components/Product';
import ProductCategory from './components/ProductCategory';
import EditProductCategory from './components/EditProductCategory';
import Admin from './pages/Admin';
import EditProduct from './components/EditProduct';
import OrdersList from './components/OrdersList';
import OrderDetails from './components/OrderDetails';
import CustomersList from './components/CustomersList';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Navb from './components/Navb';
import { useEffect, useState } from 'react';
import Order from './pages/Order';
import FilterCategory from './components/FilterCategory';
import Ct from './pages/Ct';
import PlaceOrder from './pages/PlaceOrder';
import OrderConfirm from './pages/OrderConfirm';
import RegisterTest from './pages/RegisterTest';
import LoginTest from './pages/LoginTest';
import SingleProduct from './pages/SingleProduct';
import ProdTest from './pages/ProdTest';
import MyOrders from './components/MyOrders';
import TestChild from './components/TestChild';
import SingleProductTest from './pages/SingleProductTest';
import ContactUs from './components/ContactUs';


function App() {
  // const [count,setCount] = useState(0);
  // // const [logUser,setLogUser] = useState(false);
  // const uid = localStorage.getItem('token');
 

  // useEffect(()=>{
  //   cartService.getCartItemsCount(uid)
  //   .then((res)=>{
  //     console.log(res.data);
  //     setCount(res.data);
  //   }).catch((err)=>{
  //     console.log(err);
  //   })
  // },[]);

  return (
      <BrowserRouter>
      <Navb />
        <Routes>
          <Route path="/registertest" element={<RegisterTest/>}/>
          <Route path="/logintest" element={<LoginTest/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/product" element={<Product/>}/>
          <Route path="/admin/productCategory" element={<ProductCategory/>}/>
          <Route path="/admin/editProductCategory/:categoryId" element={<EditProductCategory/>}/>
          <Route path="/admin/editProduct/:id" element={<EditProduct/>}/>
          <Route path="/cat/:category" element={<FilterCategory/>}/>
          <Route path="/admin/orders" element={<OrdersList/>}/>
          <Route path="/admin/orders/orderDetails/:id" element={<OrderDetails/>}/>
          <Route path="/admin/customers" element={<CustomersList/>}/>
          <Route path="/order/:uid" element={<PlaceOrder/>}></Route>
          <Route path="/myOrders/:uid" element={<MyOrders/>}></Route>
          <Route path="/orderConfirm/:oid" element={<OrderConfirm/>}></Route>
          <Route path="/cart/:uid" element={<Ct />}></Route>
          <Route path="/allProducts" element={<Products/>} ></Route>
          <Route path="/product/:pid" element={<SingleProduct />}></Route>
          
          <Route path="/producttest/:pid" element={<ProdTest/>}></Route>
          <Route path="/testcart/:pid" element={<SingleProductTest/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>

        </Routes>
      </BrowserRouter>
  );
}

export default App;
