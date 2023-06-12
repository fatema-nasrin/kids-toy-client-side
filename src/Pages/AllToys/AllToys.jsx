import { useEffect, useState } from "react";
import { HiCurrencyBangladeshi } from "react-icons/hi";

const AllToys = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("allToy.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
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
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
       )}
    </div>
    
  );
};

export default AllToys;
