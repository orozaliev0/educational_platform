import './App.scss';
import {Routes, Route} from "react-router-dom";
import MainPage from "./components/main-page/MainPage";
import Subscription from "./components/page/subscription/Subscription";
import Footer from "./components/footer/Footer";
import Expectation from "./components/page/expectation/Expectation";
import Success from "./components/page/success/Success";
import ToMore from "./components/page/to_more/ToMore";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/" } element={<MainPage/>}/>
                <Route path={'/subscription'} element={<Subscription/>}/>
                <Route path={'/expectation'} element={<Expectation/>}/>
                <Route path={'/success'} element={<Success/>}/>
                <Route path={'/to_more'} element={<ToMore/>}/>
            </Routes>
            <Footer/>
            </div>
    );
}

export default App;
