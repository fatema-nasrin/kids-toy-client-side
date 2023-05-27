import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("please add uppercase");
      return;
    } else if (!/ (?=.*[0-9]) /.test(password)) {
      setError("please add at least two number");
    } else if (password.length < 6) {
      setError("please enter 6 ch-rt");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full max-w-sm text-white shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold text-white">
              Login now!
            </h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#">
                    <span className="label-text-alt link-accent">
                      {" "}
                      Create an account?{" "}
                    </span>{" "}
                    <span className="label-text-alt">or </span>
                    <Link
                      className="label-text-alt link link-hover"
                      to="/signup"
                    >
                      Sign up{" "}
                    </Link>
                  </a>
                </label>
              </div>

              <div className="divider">OR</div>

              <div className="form-control">
                <a href="#">
                  <Link className="label-text-alt link link-hover ml-1 mr-24 text-base">
                    <button className="btn btn-outline btn-info">
                      {" "}
                      <FaGoogle className="mr-2" /> continue with google
                    </button>{" "}
                  </Link>
                </a>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Log in"
                />
              </div>
              <p className="text-danger">{error} </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
