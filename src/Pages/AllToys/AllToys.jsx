import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllToys = () => {
 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="overflow-x-auto w-full text-white">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>View Details </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className="flex shrink items-center">
                  <div className="avatar ">
                    <div className="flex h-20 w-auto">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.seller.image} />
                      </div>
                      <div>
                        <small className="text-red-400">{product.seller.name} </small>
                      </div>
                    </div>

                    <div>
                      <div className="font-bold">{product.name} </div>
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-bold">{product.toyName}</td>

              <td className="text-start">{product.subCategory + ","}</td>

              <td>$ {product.price}</td>
              <td className="text-center">{product.quantity}</td>

              <th>
                <Link to={`${product.id}`}>
                <button className="btn btn-outline btn-xs">
                  View Details
                </button>
                </Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
