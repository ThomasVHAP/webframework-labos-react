import { createBrowserRouter, NavLink, Outlet } from "react-router";
import { RouterProvider } from "react-router/dom";
import BasicSlot from "./oef1";
import LijstenApp from "./lijsten";
import MaalApp from "./maaltafels";
import RainApp from "./rainbow";
import MessageApp from "./message";
import PokemonApp from "./Pokemon";

const Root = () => {
  return (
    <>
      <header>
        <menu style={{display: "flex", gap: "1em", flexWrap: "wrap"}}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/basicslot">Basic Slot</NavLink>
          <NavLink to="/basiclijst">Lijsten Oefening</NavLink>
          <NavLink to="/maal">Maaltafel</NavLink>
          <NavLink to="/rainbow">Rainbow</NavLink>
          <NavLink to="/message">Message</NavLink>
          <NavLink to="/pokemon">Pokemon</NavLink>
        </menu>
      </header>
      <main>
        <Outlet />
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

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "*",
          element: <Home />
        },
        {
          path: "/basicslot",
          element: <BasicSlot />
        },
        {
          path: "/basiclijst",
          element: <LijstenApp/>
        },
        {
          path: "/maal",
          element: <MaalApp/>
        },
        {
          path: "/rainbow",
          element: <RainApp />
        },
        {
          path: "/message",
          element: <MessageApp />
        },
        {
          path: "/pokemon",
          element: <PokemonApp />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;