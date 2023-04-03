import './App.scss';

import Major from "./components/major/major";
import OurCourses from "./components/our courses/Our Courses";
import AboutUs from "./components/about us/About Us";
import {Route, Routes} from "react-router-dom";
import RegistrationForm from "./components/header/page";

function App() {
    return (
        <div className="App">
            <div className="container">
            <Routes>
                <Route path={"/"} element={<Major/>}/>
                <Route path={"/outCourses"} element={<OurCourses/>}/>
                <Route path={"/aboutUs"} element={<AboutUs/>}/>
                <Route path={"/form"} element={<RegistrationForm/>}/>
                <Route path={"*"} element={<AboutUs/>}/>
            </Routes>
            </div>
        </div>
    );
}

export default App;
