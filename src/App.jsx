import Foot from "./components/foot"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar"
import {createBrowserRouter,} from "react-router";
import router from "./router";



function App() {
 

  return (
      <div> 
        <Navbar/>
        <Hero/>
        <Foot/>
         <RouterProvider router={router} />,
      </div>
  )
}

export default App
