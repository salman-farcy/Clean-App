import { Outlet } from "react-router-dom"
import MainLayouts from "./layouts/MainLayouts"

function App() {
  return (
    <>
     <MainLayouts>
        <Outlet />
     </MainLayouts>
    </>
  )
}

export default App
                  