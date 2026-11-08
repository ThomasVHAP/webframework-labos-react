import { createBrowserRouter, NavLink, Outlet, RouterContextProvider } from "react-router";
import BoxApp from "./box";
import { RouterProvider } from "react-router/dom";

const Root = () => {
  return (
    <>
      <header>
        <menu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/box">Boxes</NavLink>
        </menu>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

const Home = () => {
    return <div>This is the home page!</div>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/box",
        element: <BoxApp />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
