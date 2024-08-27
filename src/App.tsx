import { RouterProvider } from "react-router-dom"
import { Element } from "./Routes/Router"

const App = () => {
  return (
    <div>
      <RouterProvider router={Element}/>
    </div>
  )
}

export default App