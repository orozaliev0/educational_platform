import './App.scss';
import MainPage from "./components/main-page/MainPage";
import Subscription from "./components/page/subscription/Subscription";
import OurCourses from "./components/our courses/Our Courses";
import AboutUs from "./components/about us/About Us";
import {Route, Routes} from "react-router-dom";
import RegistrationForm from "./components/header/page";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/ourCourses"} element={<OurCourses/>}/>
                <Route path={"/aboutUs"} element={<AboutUs/>}/>
                <Route path={"/form"} element={<RegistrationForm/>}/>
                <Route path={'/subscription'} element={<Subscription/>}/>
            </Routes>

        </>
    );
}

export default App;
