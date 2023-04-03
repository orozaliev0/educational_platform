import React, {useContext, useState} from 'react';
import row from '../../img/Kaif 1.svg'
import {Link, NavLink, useNavigate} from "react-router-dom";
import '../header/Header.scss'
import vector from '../../img/Vector.svg'
import {PageContext} from "../../Context/ContextWrapper";
import AfterButton from "../AfterButton";

const Header = () => {

    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const {page, setPage} = useContext(PageContext)

    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <div className="header__menu"
                         style={{transform: !isOpen ? 'translate(0, -800px)' : '',}}>
                        <nav className="header__menu--navbar">
                            <NavLink onClick={() => setIsOpen(false)} to={'/'}></NavLink>
                            <NavLink onClick={() => setIsOpen(false)} to={'/Главная'}></NavLink>
                            <NavLink onClick={() => setIsOpen(false)} to={'/Наши курсы'}></NavLink>
                            <NavLink onClick={() => setIsOpen(false)} to={'/О нас'}></NavLink>
                            <div>
                                <button onClick={() => {
                                }}><img className='w-[90%]' src={vector} alt=""/>Войти
                                </button>
                            </div>
                        </nav>


                    </div>


                    <NavLink to={'/'}>
                        <div className="">
                            <img className='pl-16' src={row} alt=""/>
                            <h1> SELF DEVELOPING SCHOOL</h1>
                        </div>
                    </NavLink>
                    <div className="header--text">
                        <NavLink to={'/major'}>
                            <a href="">Главная</a>
                        </NavLink>
                        <NavLink to={'/our courses'}>
                            <a href="">Наши курсы</a>
                        </NavLink>
                        <NavLink to={'/about us'}>
                            <a href="">О нас</a>
                        </NavLink>
                    </div>
                    <div className="header--btn">
                        <button style={{display: page ? "none" : "block"}} onClick={() => navigate("/form")}><img className='w-[90%]' src={vector} alt=""/>Войти</button>
                        <AfterButton page={page}/>
                    </div>
                </div>

            </div>
            <hr/>
        </header>


    );
};

export default Header;