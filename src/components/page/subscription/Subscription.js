import React from 'react';
import "./Subscription.scss"
import {AiOutlineCheck} from "react-icons/ai"

const Subscription = () => {
    return (
        <div className='container'>
            <div className="page">
                <div className="page__block">
                    <h1>Оформление подписки</h1>
                    <div className='page__block__inp'>
                        <h2>ФИО</h2>
                        <input type="text" placeholder='Muslim Bolot Joodarovich' name='name'/>
                    </div>

                    <div className='page__block__inp'>
                        <h2>Електронная почта</h2>
                        <input type="text" placeholder='Example@gmail.com' name='Gmail'/>
                    </div>

                    <div className='page__block__inp'>
                        <h2>Номер телефона</h2>
                        <input type="number" placeholder='+996 770 55 55 55 '/>
                    </div>

                    <div className='page__block__inp'>
                        <h2>Промокод</h2>
                        <input type="text" placeholder="If you do have"/>
                    </div>


                    <h2 className='page__block__title'>Оплата</h2>
                    <div className='page__block__check'>
                        <div>
                            <input type="radio" name="tabs" className={"radio"}/>
                            <p>Visa</p>
                        </div>

                        <div>
                            <input type="radio" name="tabs" className={"radio"}/>
                            <p>Master Card</p>
                        </div>

                    </div>

                    <div className="page__block__card">
                        <div className='page__block__card__1'>
                            <h2>Номер карты</h2>
                            <input type="text" placeholder='1234 4567 7788 9210'/>
                        </div>
                        <div className='page__block__card__2'>
                            <h2>Срок</h2>
                            <input type="text" placeholder='12/25'/>
                        </div>
                        <div className='page__block__card__3'>
                            <h2>CVV</h2>
                            <input type="text" placeholder='398'/>
                        </div>
                    </div>

                    <h2 className='page__block__h2'>Уровень пакета</h2>

                    <div className='page__block__price'>
                        <div className='page__block__price--block'>
                            <h3>Обычный</h3>
                            <div className='page__block__price--block-div'>
                                <input type="radio" name='tabs'/>
                                <p>Ежемесячно</p>
                            </div>
                            <div className='page__block__price--block-div'>
                                <input type="radio" name='tabs'/>
                                <p>Ежегодно</p>
                            </div>
                        </div>
                        <div className='page__block__price--block2'>
                            <h3>Интенсив</h3>
                            <div className='page__block__price--block-div'>
                                <input type="radio" name='tabs'/>
                                <p>Ежемесячно</p>
                            </div>
                            <div className=''>
                                <input type="radio" name='tabs'/>
                                <p>Ежегодно</p>
                            </div>
                            <div className='page__block__price--block2-radio'>
                                <AiOutlineCheck className='page__block__price--block2-radio_icons'/>
                                <p>Все новые статьи</p>
                            </div>
                            <div className='page__block__price--block2-div'>
                                <AiOutlineCheck className='page__block__price--block2-div_icons'/>
                                <p>Все мастер классы по саморозвитию</p>
                            </div>
                            <div className='page__block__price--block2-div'>
                                <AiOutlineCheck className='page__block__price--block2-div_icons'/>
                                <p>Курс по накоплению <br/>средств с выполотой <br/>долгов</p>
                            </div>
                            <div className='page__block__price--block2-div'>
                                <AiOutlineCheck className='page__block__price--block2-div_icons'/>
                                <p>Курс по быстрому <br/>карьерному росту</p>
                            </div>
                            <div className='page__block__price--block2-div'>
                                <AiOutlineCheck className='page__block__price--block2-div_icons'/>
                                <p>Курс по одолеванию <br/>страха потери</p>
                            </div>
                        </div>
                    </div>

                    <div className='page__block__button'>
                        <button>Оплатить 250$</button>
                    </div>
                    <div className='page__block__last'>
                        <input type="checkbox"/>
                        <h2 className='page__block__bottom'>Я ознакомился и согласен с Условиями оказания услуг</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subscription;