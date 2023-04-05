import React from 'react';

const Hero = () => {
    return (
        <>
        <div className="Hero">
            <div style={{paddingTop:'7%'}} className="Hero--right">
                <h1 className="Hero-right-h1">Само развитие лучше <br/>
                    чем школьное обучение</h1>
                <p className="Hero-right-p">Здесь вы найдете все для само-обучения.</p>
                <button  type="button"
                         className="Hero-right-btn text-blue-900 bg-white from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:text-white  hover:outline-0 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Подобрать пакет

                </button>

                <button  type="button"
                         className="Hero-right-btn text-blue-900 bg-white from-purple-600 to-blue-500 hover:bg-gradient-to-bl hover:text-white  hover:outline-0 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Подобрать пакет

                </button>

            </div>
            <div className="Hero--left">

            </div>
        </div>
    <div className="Hero-book2">
        <div>

        </div>
        <div>

        </div>
    </div>
        </>

);
};


export default Hero;