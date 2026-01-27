import {createBrowserRouter,} from "react-router";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Quote from "./components/Quote";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/services",
    element: <Services />,
  },

  {
    path: "/quote",
    element: <Quote />,
  },
]); 

export default router;