import './App.scss';
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
                <Route path={'/newBooks'} element={ <NewBooks/>}/>
            </Routes>
        </div>
    );
}

export default App;
