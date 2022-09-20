import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import About from "./components/About";
import Books from "./components/Books";
import Book from "./components/Book";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />}>
            <Route
              index
              element={
                <main style={{ padding: "2rem", color:"aquamarine" }}>
                  <h4>کتاب مورد نظر خود را انتخاب نمائید</h4>
                </main>
              }
            />
            <Route path=":bookId" element={<Book />} />
          </Route>
          <Route
            path="*"
            element={
              <div className="imageNotFound">
                <img  src={require('./assets/404.gif')} />
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
