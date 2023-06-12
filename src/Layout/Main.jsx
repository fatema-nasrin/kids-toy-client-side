import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { createContext, useState } from "react";
import Modal from "../Modal/Modal";



export const ProductContext = createContext([])
export const CartContext = createContext([])
const Main = () => {

  let [isOpen, setIsOpen] = useState(false)
  const { products, initialCart } = useLoaderData()

  const cartAlert = sessionStorage.getItem('alert')

  if (initialCart.length > 0 && cartAlert !== 'true') {
    setIsOpen(true)
    sessionStorage.setItem('alert', true)
  }
  const [cart, setCart] = useState(initialCart)
    return (
        <div>
            <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
            <Navbar/>
            <Outlet/>
            <Footer/>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </CartContext.Provider>
    </ProductContext.Provider>
        </div>
    );
};

export default Main;