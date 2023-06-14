import { RouterProvider } from "react-router-dom"
import NavbarComponent from "./components/Navbar/NavbarComponent"
import routes from "./router/router"

function App() {
  return (
    <>
      <NavbarComponent />
      <RouterProvider router={routes} />
    </>
  )
}

export default App
