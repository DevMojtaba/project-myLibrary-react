import React from "react";
import { getBooks } from "../data/data";
import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import CS from "./Books.module.scss";

const Book = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const books = getBooks();
  return (
    <div className="d-flex">
      <nav className={CS.booksContainer}>
        <input
          type="text"
          placeholder="جستجوی کتاب ها"
          value={searchParams.get("filter") || ""}
          onChange={(e) => {
            let filter = e.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {books
          .filter((book) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = book.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })

          .map((e) => (
            <NavLink
              className={CS.booksName}
              style={({ isActive }) => {
                return {
                //   display: "block",
                //   margin: "1rem",
                  color: isActive ? "aquamarine" : "burlywood",
                };
              }}
              to={`/books/${e.number}${location.search}`}
              key={e.name}>
              {e.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Book;
