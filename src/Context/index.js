import React, {useState} from 'react';
import {PageContext} from "./ContextWrapper";

const Context = ({children}) => {
    const [page,setPage] = useState(false)
    return (
        <PageContext.Provider value = {{page,setPage}}>
            {children}
        </PageContext.Provider>
    );
};

export default Context;