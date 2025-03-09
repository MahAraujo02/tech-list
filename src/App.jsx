import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes/router.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
