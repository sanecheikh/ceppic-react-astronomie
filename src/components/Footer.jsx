export default function Footer (copylelft) {
    const CurrentYear = ()=>{
        return new Date().getFullYear();
    }
    return (

        <P> &copy;- {CurrentYear()}- Blog Astronomie</P>)
     
    
};