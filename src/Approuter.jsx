import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Expe from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
const AppRouter = ()=>{
    return(
        <Router>
          <Routes>
               <Route path="/" element={<Home/>} />
               <Route path="/project" element={<Projects/>} />
               <Route path="/experince" element={<Expe/>} />
               <Route path='/skills' element={<Skills/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path="*" element={<NotFound/>} />
           </Routes>
        </Router>
    )
}

export default AppRouter;