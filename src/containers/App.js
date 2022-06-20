import './App.scss';
import Home from "../Routes/home/home.components"
import {Routes, Route} from 'react-router-dom'
import Navigation from "../Routes/navigation/navigation.component"
import Authentication from '../Routes/authentication/authentication.component';




const Shop =()=>{
  return <div>
    <h1>Shop</h1>

  </div>
}


function App() {
  return (
    <Routes>
      <Route path ='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
