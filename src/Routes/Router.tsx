import { createBrowserRouter } from "react-router-dom";
import { Homelayout } from "../components";
import Homepage from "../Pages/Homepage";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout />,
        children: [
            {
                index: true,
                element: <Homepage />
            }
        ]
    }
])