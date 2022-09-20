import { Link, Outlet } from "react-router-dom";
import CS from "./App.module.scss";

const App = () => {
  return (
    <div className={`${CS.container}  `}>
      <h1>کتابخانه من</h1>
      {/*About - Books*/}
      <nav className={CS.rootContainer}>
        <span>
          <Link to="/books">کتاب ها</Link>
        </span>
        <span>
          <Link to="/about">درباره ما</Link>
        </span>
      </nav>
      <div className={CS.line}></div>
      <Outlet />
    </div>
  );
};

export default App;
