import Link from "next/link";

const Login = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-start-2 col-end-2">
        <h1 className="text-center text-3xl font-medium text-gray-600">
          Sign In
        </h1>
        <p className="text-center text-gray-400 my-4">
          Sign in to issue credentials
        </p>
        <div className="mt-6">
          <form className="flex flex-col gap-y-1">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your email"
              className="py-2 px-3 border border-gray-400 rounded"
            />
            <br />
            <label htmlFor="password" className="text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="py-2 px-3 border border-gray-400 rounded"
            />
            <div className="mt-6">
              <Link
                href="/user/forgot-password"
                className="text-sky-600 hover:text-sky-700"
              >
                Forgot your password?
              </Link>
            </div>
            <div className="mt-10 flex flex-col gap-y-5 items-center">
              <Link
                className="text-center px-4 py-2 mx-2 rounded-3xl font-medium bg-sky-600 hover:bg-sky-700 text-white w-28"
                href="/user/login"
              >
                Login
              </Link>
              <Link
                href="/user/login"
                className="text-sky-600 hover:text-sky-700"
              >
                Don't have account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
