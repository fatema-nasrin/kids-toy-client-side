import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const { createUser }= useContext(AuthContext)
  

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email,password,photo);

        createUser(email, password,photo)
        .then(result => {
          const loggedUser =result.user;
          console.log(loggedUser);
          form.reset();
        })
        .catch(error => {
          console.log(error);
        })
    }
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col text-white">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up!</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              <label className="label">
                <a href="#">
                  <span className="label-text-alt link-accent">
                    {" "}
                    Already Have an account?
                  </span>{" "}
                  <span className="label-text-alt">or </span>
                  <Link className="label-text-alt link link-hover" to="/login">
                    {" "}
                    login{" "}
                  </Link>
                </a>
              </label>

              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign up"
                />
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
