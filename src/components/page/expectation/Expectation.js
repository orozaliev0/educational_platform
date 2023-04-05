import React from 'react';
import "./HangOn.scss"
import books from "../../../img/books.png"

const Expectation = () => {
    return (
        <div className='container'>
            <div className="hang_on">
                <img src={books} alt=""/>
                <h1>SELF DEVELOPING SCHOOL</h1>
                <p>Ожидание оплаты</p>
            </div>
        </div>
    );
};

export default Expectation;