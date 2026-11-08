import { createBrowserRouter, createPath, NavLink, Outlet } from "react-router"
import { RouterProvider } from "react-router/dom"
import styles from "./css.module.css"
import CounterApp from "./Counter"
import TodoApp from "./Todo"
import HappyApp from "./Happy"

const Root = () => {

  return (
    <>
      <header className={styles.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/todo">Todo</NavLink>
        <NavLink to="/happy">Happy</NavLink>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

const Home = () => {
  return <p>Hi</p>
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
        path:"/counter",
        element: <CounterApp/>
      },
      {
        path:"/todo",
        element: <TodoApp/>
      },
      {
        path: "/happy",
        element: <HappyApp/>
      }
    ]
  }
])



const App = () => {

  return(
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App;