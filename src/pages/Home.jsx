import Header from "../components/Header";
import About from "../components/Home";
import Footer from "../components/Footer";

function Home(){
    return(
        <div className="page">
           <Header></Header>
            <About/>
            <Footer></Footer>
        </div>
    )
}
export default Home;