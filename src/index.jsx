import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
