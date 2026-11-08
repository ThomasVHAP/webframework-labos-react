import { createBrowserRouter, NavLink, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import styles from "./css.module.css"
import NeoApp from "./Neo";
import { useState } from "react";
import NeoProvider, { NeoContext } from "./Context/Neo";
import NeoAganeApp from "./Neo2";
import NeoProvider2, { NeoContext2 } from "./Context/Neo2";
import SquareApp from "./Square";
import SquareProvider, { SquareContext } from "./Context/Square";

const Root = () => {

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/neo">Neo</NavLink>
        <NavLink to="/neo2">Neo2</NavLink>
        <NavLink to="/square">Square</NavLink>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

const Home = () => {
  return (
    <>
      <p>Boop</p>
    </>
  )
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/neo",
        element: <NeoApp/>
      },
      {
        path: "/neo2",
        element: <NeoAganeApp/>
      },
      {
        path: "/square",
        element: <SquareApp/>
      }
    ]
  }
])

const App = () => {

  return (
    <>
        <NeoProvider2>
          <NeoProvider>
            <SquareProvider>
              <RouterProvider router={Router}/>
            </SquareProvider>
          </NeoProvider>
        </NeoProvider2>
    </>
  )
}

export default App;