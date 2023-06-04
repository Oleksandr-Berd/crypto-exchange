import { Route, Routes } from "react-router-dom";
import "./App.css";
import { GlobalStyles } from "./GlobalStyles";

import MainPage from "./Pages/MainPage/MainPage";
import SharedLayout from "./components/SharedLayout/Sharedlayout";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
