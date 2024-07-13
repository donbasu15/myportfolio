import Header from "../components/Header";
import Project from "../components/Projects";
import Footer from "../components/Footer";

function Projects(){
    return(
        <div className="page">
           <Header></Header> 
            <Project/>
            <Footer/>
        </div>
    )
}

export default Projects;