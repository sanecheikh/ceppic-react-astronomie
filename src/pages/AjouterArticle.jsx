
import { useState } from "react";

import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useNavigate  } from "react-router-dom";
export default function AjoutArticle (){
    
        const [titre, setTitre] = useState();
        const [article, setArticle] = useState();
          const [submitted, setSubmitted] = useState(false);
     
        const handleSubmit = async (e) => {
           e.preventDefault();
           try {
              await addDoc(collection(db, "ajouterarticle"), {
                 titer: titre,
                 article: article,
                
                 created: Timestamp.now(),
              });
              setSubmitted(true);
           } catch (err) {
              console.log(err);
           }
        };
     
        submitted && navigate("/articles");

        return (
          <>
            <div className="article">
              <h2>Ajouter Artic le</h2>
              <form method="POST" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="titre"
                    placeholder="titre de l'article"
                    required
                    onChange={(event) => setTitre(event.target.value)}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Contenue de l'article"
                    name="article"
                    required
                    onChange={(e) => setArticle(e.target.value)}
                  />
                </div>
                <div>
                  <button type="submit">Enregister l'article</button>
                </div>
              </form>
            </div>
          </>
        );
      }