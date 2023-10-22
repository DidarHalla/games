// import { Body } from "./Body";

import { RouterProvider } from "react-router-dom";
import { createRouter } from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={createRouter} />
    </>
  );
}

export default App;
