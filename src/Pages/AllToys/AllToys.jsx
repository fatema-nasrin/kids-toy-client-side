import toast from 'react-hot-toast'
import { useContext } from "react";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { CartContext, ProductContext } from "../../Layout/Main";
import { addToDb } from "../../utils/fakedb";

const AllToys = () => {
  const products = useContext(ProductContext || [])
  const [cart, setCart] = useContext(CartContext || [])

  const handleAddToCart = product => {
    let newCart = []
    const exists = cart.find(
      existingProduct => existingProduct.id === product.id
    )
    if (!exists) {
      product.quantity = 1
      newCart = [...cart, product]
    } else {
      const rest = cart.filter(
        existingProduct => existingProduct.id !== product.id
      )
      exists.quantity = exists.quantity + 1
      newCart = [...rest, exists]
    }

    setCart(newCart)
    addToDb(product.id)
    toast.success('Product Added! 🛒', { autoClose: 500 })
  }

  
  return (

    <div className="container mx-auto my-12 grid grid-cols-4 gap-4">
      {products.map( (product,id) =>
      <div key={id} className="card">
        <figure>
          <img
            src={product.picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
        <p>{product.rating} </p>
          <h2 className="card-title">{product.toyName} </h2>
          <p className="flex items-center text-orange-500 text-2xl"><HiCurrencyBangladeshi className="h-5 w-auto"/> {product.price} </p>
         <h2>Quantity: {product.quantity} </h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            <button onClick={() => handleAddToCart(product)} className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
       )}
    </div>
    
  );
};

export default AllToys;
