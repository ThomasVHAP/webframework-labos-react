import { createBrowserRouter, NavLink, Outlet, RouterProvider } from "react-router"
import styles from "./styles.module.css"
import ShoppingApp from "./Shopping"
import ColorApp from "./Colors"
import SortingApp from "./Sorting"
import TicApp from "./Tictactoe"
import Aliens from "./Alien"

const Root = () => {
  return (
    <>
      <header className={styles.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shopping">Shopping!</NavLink>
        <NavLink to="/colors">Kleurboekje</NavLink>
        <NavLink to="/sorting">Sorting</NavLink>
        <NavLink to="/toes">Tic Tac Toes</NavLink>
        <NavLink to="/alien">Aliens</NavLink>
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
      <p>Hi</p>
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
        path: "*",
        element: <Home/>
      },
      {
        path: "/shopping",
        element: <ShoppingApp/>
      },
      {
        path:"/colors",
        element: <ColorApp/>
      },
      {
        path: "/sorting",
        element: <SortingApp/>
      },
      {
        path: "/toes",
        element: <TicApp/>
      },
      {
        path: "/alien",
        element: <Aliens/>
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App;