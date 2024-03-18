import styled from "styled-components";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Contract from "./pages/Contract";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
