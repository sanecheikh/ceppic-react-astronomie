export default function Footer (copylelft) {
    const CurrentYear = ()=>{
        return new Date().getFullYear();
    }
    return (

        <p> &copy;- {CurrentYear()}- Blog Astronomie</p>)
     
    
};