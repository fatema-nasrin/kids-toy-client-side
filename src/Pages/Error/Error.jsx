import { Link } from "react-router-dom";


const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img
        src="https://www.desicomments.com/user/2008/02/5418/error.gif" 
        alt="Error GIF"
        className="h-auto w-auto mb-4"
      />
      <h1 className="text-3xl font-semibold text-gray-800 mb-2">Oops! Something went wrong.</h1>
      <p className="text-gray-600 mb-4">We apologize for the inconvenience.</p>
      <Link to="/">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Go back to Home
      </button>
      </Link>
    </div>
  );
};

export default Error;
