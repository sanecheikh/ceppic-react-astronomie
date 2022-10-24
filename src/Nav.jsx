import { Link,Outlet } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/article">Article</Link>
        <Link to="/ajouterarticle">AjouterArticle</Link>
        <Link to="/apropos">APropos</Link>
      </nav>
      <Outlet />
    </>
  );
}

