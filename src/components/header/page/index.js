import React, {useContext, useState} from 'react';
import './account.scss'
import {PageContext} from "../../../Context/ContextWrapper";
import {useNavigate} from "react-router-dom";


function RegistrationForm() {
    const [contaxt, setContext] = useState([])
    const {setPage, page} = useContext(PageContext)
    const [state, setState] = useState(false)
    const [mode, setMode] = useState(false)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => setFormData({...formData, [event.target.name]: event.target.value,});

    const handleClick = () => {
        if (formData.firstName.trim().length !== 0 && formData.lastName.trim().length !== 0 && formData.email.trim().length !== 0 && formData.password.trim().length !== 0) {
            setContext([...contaxt, formData])
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div hidden={state}>
            <form onSubmit={handleSubmit}>
                <label>
                    Имя:
                    <input style={{border: mode ? "2px solid red" : "3px solid black"}}
                           type="text"
                           name="firstName"
                           value={formData.firstName}
                           onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Фамилия:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <label>
                    Пароль:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <br/>
                <button style={{margin: "100px 0"}} onClick={() => {
                    setState(true)
                    handleClick()
                    setPage(!page)
                    navigate("/major")
                }}>Зарегистрироваться
                </button>
            </form>
            <div>

            </div>
        </div>
    );
}

export default RegistrationForm;