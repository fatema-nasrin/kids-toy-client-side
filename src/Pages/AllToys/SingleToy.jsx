import { useLoaderData } from "react-router-dom";



const SingleToy = () => {
  const singleToy = useLoaderData();
  console.log(singleToy);
   
    return (
        <div className="card w-96 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"> </h2>
          <p> toyname: </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default SingleToy;