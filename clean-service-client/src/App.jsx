import { Outlet } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts";
import Container from "./components/ui/Container";

function App() {
  return (
    <>
      <MainLayouts>
        <Container>
          <Outlet />
        </Container>
      </MainLayouts>
    </>
  );
}

export default App;
