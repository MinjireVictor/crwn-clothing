import './App.scss';
import Home from "../Routes/home/home.components"
import {Routes, Route} from 'react-router-dom'
import Navigation from "../Routes/navigation/navigation.component"
import Authentication from '../Routes/authentication/authentication.component';
import CartCheckout from '../Routes/cart-checkout/cart-chekout';
import Shop from '../Routes/shop/shop.component';



function App() {
  return (
    <Routes>
      <Route path ='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop/*" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
        <Route path="checkout" element={<CartCheckout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
