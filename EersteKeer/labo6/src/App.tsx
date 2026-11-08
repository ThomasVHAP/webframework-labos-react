import { createBrowserRouter, NavLink, Outlet } from "react-router"
import { RouterProvider } from "react-router/dom"
import styles from "./css.module.css"
import InervalApp from "./Interval"
import PokemonApp from "./Pokemon"
import LocalApp from "./LocalStorage"
import DelayApp from "./Hooks"

const Root = () => {

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/interval">Interval</NavLink>
        <NavLink to="/pokemon">Pokemon App</NavLink>
        <NavLink to="/local">Local Storage</NavLink>
        <NavLink to="/delay">Delay App</NavLink>
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
      <p>Herro</p>
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
        path: "/interval",
        element: <InervalApp />
      },
      {
        path: "/pokemon",
        element: <PokemonApp/>
      },
      {
        path: "/local",
        element: <LocalApp/>
      },
      {
        path: "/delay",
        element: <DelayApp/>
      }
    ]
  }
])

const App = () => {

  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App;