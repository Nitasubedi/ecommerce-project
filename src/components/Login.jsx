import { useFormik } from "formik";
import * as z from "zod";
import useAuthStore from "../store";

const LoginForm = () => {
  const login = useAuthStore((state) => state.login);

  const loginSchema = z.object({
    username: z.string().nonempty("Username is required"),
    password: z.string().nonempty("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      const result = loginSchema.safeParse(values);
      if (!result.success) {
        result.error.errors.forEach((error) => {
          errors[error.path[0]] = error.message;
        });
      }
      return errors;
    },
    onSubmit: (values) => {
      login(values.username, values.password);
    },
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="w-full max-w-xs bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-red-500 text-sm">
                {formik.errors.username}
              </div>
            ) : null}
          </div>
          <div className="mb-6">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-orange-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
