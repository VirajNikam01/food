import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./Footer";
import Header from "./Header";
import RestronentInfo from "./components/home/RestronentInfo";
import React, { useEffect, useState } from "react";
import UserContext from "./utility/UserContext";

const App = () => {
  const [nameVar, setNameVar] = useState();

  useEffect(() => {
    data = {
      name: "Viraj Nikam",
    };
    setNameVar(data.name);
  }, []);

  console.log("app rendered");
  return (
    <div>
      <UserContext.Provider value={{ userName: nameVar, setNameVar }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/restronent/:resId",
        element: <RestronentInfo />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
