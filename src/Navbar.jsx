import {link} from 'react-dom';
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div>
                <Link className='logo' to="/"Blog Astronomie></Link> 
        
                </div>
              <div>
                <ul className='liens'>
                <li><Link to ='/'className='lien'>Article</Link></li>
                 <li> <Link to ='/'className='lien buttonAjouterArticle'> Ajouter Article</Link></li>
                <li><Link to ='/'className='lien buttonAPropos'>A Propos</Link></li>
                 </ul>

            </div>
        </nav>
);
};
export default Navbar;

