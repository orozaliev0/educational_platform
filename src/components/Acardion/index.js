import React ,{useState} from 'react';
import "./acardion.scss"
import dions from "../../img/acardion-img.png"
import kail12 from "../../img/Kaif 12.svg"
import kaif4 from "../../img/Kaif 4.svg"
import {MdArrowBackIosNew} from "react-icons/md";
import "./acardionmedia.css"

const Acardion = () => {
    return (
        <div id="dion">
                {/*<img className="kaif12" src={kail12} alt=""/>*/}
            <div className="container">
                <div className="dion">
                    <div className="dion-right">
                        <div>
                            <h1 className="Dion-h1">Появились вопросы?</h1>
                        </div>
                        <div>
                            <div>
                                <img className="Dion-img" src={dions} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="dion-left">
                        <div className="dionsAcc">
                            <hr/>
                            <details>
                                <summary className="summary-text">
                                    <h3 className="summary-text">Сколько всего насчитывается материала
                                        всего?</h3>
                                    <MdArrowBackIosNew className="icons"/>
                                </summary>
                                <p className="details-parag">К сожелению мы уже утратили счет материалы спустьа столько лет <br/>
                                    работы и уже их настолько много что их уже не</p>
                            </details>
                            <hr className="hrTwo"/>
                        </div>
                        <div className="dionsAcc">
                            <details>
                                <summary className="summary-text">
                                    <h3>Потеряю ли я оставшесея время если
                                        перейду на другой до окончания этого?</h3>
                                    <MdArrowBackIosNew className="icons"/>
                                </summary>
                                <p className="details-parag">К сожелению мы уже утратили счет материалы спустьа столько лет <br/>
                                    работы и уже их настолько много что их уже не</p>
                            </details>
                            <hr className="hrTwo"/>
                        </div>
                        <div className="dionsAcc">
                            <details>
                                <summary className="summary-text">
                                    <h3>Могу ли я отказаться от автопродления
                                        подписки?
                                    </h3>
                                    <MdArrowBackIosNew className="icons"/>
                                </summary>
                                <p className="details-parag">К сожелению мы уже утратили счет материалы спустьа столько лет <br/>
                                    работы и уже их настолько много что их уже не</p>
                            </details>
                            <hr className="hrTwo"/>
                        </div>
                        <div className="dionsAcc">
                            <details>
                                <summary className="summary-text">
                                    <h3>Откуда мне узнавать про новые статьи и
                                        курсы?</h3>
                                    <MdArrowBackIosNew className="icons"/>
                                </summary>
                                <p className="details-parag">К сожелению мы уже утратили счет материалы спустьа столько лет <br/>
                                    работы и уже их настолько много что их уже не</p>
                            </details>
                            <hr className="get-tenHr"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)
    ;
};

export default Acardion;