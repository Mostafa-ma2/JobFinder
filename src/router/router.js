import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";

const routes = createBrowserRouter([
    { path: '/', element: <HomePage /> }
])


export default routes