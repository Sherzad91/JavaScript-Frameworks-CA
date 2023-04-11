import './App.css'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SharedLayout from './layouts/SharedLayout';
import About from './Pages/HomePage';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import ShowProduct from './Pages/single/ShowProduct';
import CartContextProvider from './provider/CartProvider';
import SuccessPayment from './Pages/SuccessPayment';

function App() {

  return (
    // react router dom    
    <CartContextProvider>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index path='/' element={<Products />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/success-payment' element={<SuccessPayment />} />
            <Route path='/product/:id' element={<ShowProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </CartContextProvider>
  )
}

export default App
