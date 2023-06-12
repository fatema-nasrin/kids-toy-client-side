import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("succesfully added!🔥", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Our Newsletter</h2>
          <p className="text-lg text-gray-700 mb-6">
            Stay updated with our latest offerings, exclusive discounts. Sign up
            for our newsletter today!
          </p>
          <form onSubmit={handleSubmit} className="flex justify-center">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full max-w-sm rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              onClick={NewsLetter}
              type="submit"
              className="bg-blue-500 text-white rounded-r-md px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
