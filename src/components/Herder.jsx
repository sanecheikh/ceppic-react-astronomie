import "./Header.css";
export default function Header({title  ,texte}){
    return(<header className="header">
        <h1> Blog Astronomie</h1>
        <article>
            <h1>Article</h1>
           <h1>Ajouter Article</h1>
           <h1>A <Propos></Propos></h1>
        </article>
        <p>Blog d'astronomie avec React JS pour le frontend et Firebase pour le backend</p>
  
    </header>
          )
}