import './App.scss';

import Footer from "./components/footer/Footer";

import Acardion from "./components/Acardion";
import Hero from "./components/hero/Hero";


function App() {

    return (
        <div className="App">
            <Hero/>
           <Acardion/>
            <Footer/>
        </div>
    );
}

export default App;
