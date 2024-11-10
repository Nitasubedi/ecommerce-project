import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import LoginForm from "./components/Login";
import Signup from "./components/Signup";
import ProductList from "./components/Productlist"; // Import the ProductList component
import useAuthStore from "./store";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Slider />
        <ProductList />

        <Footer />
      </>
    ),
  },

  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/products", 
    element: (
      <>
        <Navbar />
        <ProductList />
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return <RouterProvider router={router} />;
};

export default App;
