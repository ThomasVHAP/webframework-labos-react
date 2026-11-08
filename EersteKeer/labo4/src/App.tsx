import { createBrowserRouter, NavLink, Outlet } from "react-router"
import { RouterProvider } from "react-router/dom"
import OmhoogApp from "./Omhoog"
import LoadingApp from "./Loading"
import ColorApp from "./colorPicker"
import styles from "./App.module.css"
import FormApp from "./Contact"
import CatApp from "./Cat"
import JoskeApp from "./Joske"

const Root = () => {
  return (
    <>
      <header>
        <menu className={styles.Menu}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/omhoogomlaag">Omhoog</NavLink>
          <NavLink to="/loading">Loading</NavLink>
          <NavLink to="/color">ColorApp</NavLink>
          <NavLink to="/form">FormApp</NavLink>
          <NavLink to="/cat">Cat...</NavLink>
          <NavLink to="/joske">Joske</NavLink>
        </menu>
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
      <h3>Home page! Herro!</h3>
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
        path: "/omhoogomlaag",
        element: <OmhoogApp/>
      },
      {
        path: "/loading",
        element: <LoadingApp/>
      },
      {
        path: "/color",
        element: <ColorApp/>
      },
      {
        path: "/form",
        element: <FormApp/>
      },
      {
        path: "/cat",
        element: <CatApp/>
      },
      {
        path: "/joske",
        element: <JoskeApp/>
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