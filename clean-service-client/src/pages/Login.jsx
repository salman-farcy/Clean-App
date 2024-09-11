import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { login, user, isLoading } = useAuth();
  const navigate = useNavigate()

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const toastId = toast.loading('Loggin in...')

    try {
      await login(email, password);
      toast.success('Logged in...', {id: toastId})
      navigate("/")
    } catch (err) {
      toast.error(err.message, {id: toastId})
    }
    // createUser
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex flex-col lg:flex-row-reverse">
        {/* text */}
        <div className="text-center lg:text-left flex-[1]">
          <h1 className="text-5xl font-bold">LogIn now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        {/* from */}
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl flex-[1]">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onBlur={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                onBlur={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="">
              <Link to="/singup">SignUp</Link>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                LogIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
