import React from 'react';
import "./More.scss"
import {useNavigate} from "react-router-dom";
import more1 from "../../img/more1.svg"
import more from "../../img/more.svg"






const More = () => {


    const navigate = useNavigate()

    return (
        <div id='more'>
            <div className="container">
                <div className="more">
                    {/*<div className={"more__img"}></div>*/}
                    <img src={more1} alt="" className={"more__img"}/>
                    <div className='more__title'>
                        <h1>Подпишитесь сейчас за 250,00 $ / год</h1>
                        <p>И получи доступ ко всем нашим материалам и <br/>начинай развиватся сейчас вместе со всеми</p>
                    </div>
                    <div className='more__btn'>
                        <button onClick={() => navigate("/subscription")} className='more__btn--btn1'>Подписаться
                        </button>
                        <button onClick={() => navigate('/to_more')} className='more__btn--btn2'>Узнать больше</button>
                    </div>
                    <img src={more} alt="" className='more__img2'/>
                </div>
            </div>
        </div>
    );
};

export default More;