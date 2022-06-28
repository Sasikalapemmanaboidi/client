import './App.css';
import Footer from './component/footer/Footer';
import Navbaar from './component/header/Navbaar';
import Maincomp from './component/home/Maincomp';
import Newnav from './component/newnavbaar/Newnav';
import Sign_in from './component/signup_sign/Sign_in';
import SignUp from './component/signup_sign/SignUp';
import {Routes,Route} from "react-router-dom";
import Cart from "./component/cart/Cart";
import Buynow from './component/buynow/Buynow';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';


function App() {
  const [data, setData] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
      setData(true)
    },3000)
  },[])
  return (
    <>
    {  
    data ? (
        <>
      <Navbaar />
      <Newnav/>
      <Routes>
        <Route path='/' element={<Maincomp/>}/>
        <Route path='/login' element={<Sign_in/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/getproductsone/:id' element={<Cart/>}/>
        <Route path='/buynow' element={<Buynow/>}/>
      </Routes>
      <Footer/> 
    </>
  ) : (
    <div className='circle'>
      <CircularProgress/>
      <h2>Loading...</h2>
    </div>
  )
}
</>
    
  );
}

export default App;
