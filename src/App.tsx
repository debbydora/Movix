import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.scss";
import RouteLists from "./shared/route-lists";

const router = createBrowserRouter(RouteLists);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
