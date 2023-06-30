
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header /> <Home />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
