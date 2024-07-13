import Header from "../components/Header";
import Footer from "../components/Footer";
import Error from "../components/404error";
function NotFound(){
    return(
        <div className="page">
           <Header></Header>
           <Error></Error>
            <Footer></Footer>
        </div>
    )
}

export default NotFound;