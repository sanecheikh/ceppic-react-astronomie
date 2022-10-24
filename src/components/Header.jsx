import "./Header.css";
import Nav from "../Nav";
export default function Header({ title,texte}){
    return (<>
        <Nav />
        <header className="header">
          <h1>React JS</h1>
          <p>Librairie javascript fonde par Facebook</p>
        </header>
      </>
    );
  }

