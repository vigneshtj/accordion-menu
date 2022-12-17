import { useState } from "react";
import Simple from "./SimpleAccordion/Simple";
import Recursive from "./Recursive/Recursive";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ul>
                <li>
                  <a href="/simple">simple</a>
                </li>
                <li>
                  <a href="/recursive">recursive</a>
                </li>
              </ul>
            </>
          }
        />
        <Route path="/simple" element={<Simple />} />
        <Route path="/recursive" element={<Recursive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
