import React from 'react';
import More from "../more/More";
import Books from "../books/Books";
import Acardion from "../Acardion";
import Hero from "../hero/Hero";

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