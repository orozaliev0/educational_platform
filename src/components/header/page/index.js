import React from 'react';
import "./account.scss"
import imageBook from "../../../img/ISS.svg"
import Avtorizatsiya from "../../page/subscription/Avtorizatsiya";


const Account = () => {
    return (
        <div className="w-full h-full  z-50 fixed account">
            <div className="flex justify-center items-center flex-col">
                <img src={imageBook} alt=""/>
                <h1 className="h">SELF DEVELOPING SCHOOL</h1>
                <Avtorizatsiya/>
            </div>
        </div>
    );
};

export default Account;