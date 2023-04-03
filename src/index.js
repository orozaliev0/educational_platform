import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter} from "react-router-dom";
import Layout from "./components/Layout";
import Context from "./Context";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Context>
            <Layout>
                <App/>
            </Layout>
        </Context>
    </BrowserRouter>
);
