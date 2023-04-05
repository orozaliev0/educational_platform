import React from 'react';
import More from "../more/More";
import Books from "../books/Books";
import Hero from "../hero/Hero";
import Acardion from "../Acardion";

const MainPage = () => {

    return (
        <div>
            <Hero/>
            <Books/>
            <More/>
          <Acardion/>
        </div>
    );
};

export default MainPage;