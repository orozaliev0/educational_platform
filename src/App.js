import './App.scss';
import {Routes, Route} from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import Subscription from "./components/page/subscription/Subscription";
import Footer from "./components/footer/Footer";
import Expectation from "./components/page/expectation/Expectation";
import Success from "./components/page/success/Success";
import ToMore from "./components/page/to_more/ToMore";

import Footer from "./components/footer/Footer";
import Acardion from "./components/Acardion";
import Books from "./components/books/Books";
import {Route, Routes} from "react-router-dom";
import NewBooks from "./components/books/pageBooks/newBooks";


function App() {
    return (
        <div className="App">
            <Books/>
           <Acardion/>
            <Footer/>

            <Routes>
                <Route path={"/" } element={<MainPage/>}/>
                <Route path={'/subscription'} element={<Subscription/>}/>
                <Route path={'/expectation'} element={<Expectation/>}/>
                <Route path={'/success'} element={<Success/>}/>
                <Route path={'/to_more'} element={<ToMore/>}/>
            </Routes>
            <Footer/>
            </div>
                <Route path={'/newBooks'} element={ <NewBooks/>}/>
            </Routes>
        </div>

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
