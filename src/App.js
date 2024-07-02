import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <span className="page-title">Patisserie Ide</span>
          <Link className="link" to="/menuList">
            MenuList
          </Link>
          <Link className="link" to="/shopList">
            ShopList
          </Link>
          <Link className="link" to="/">
            Home
          </Link>
        </div>
        <div className="body">
          <Router />
        </div>
      </BrowserRouter>
    </>
  );
}
