'use client'

import NotFound from '@/app/components/NotFound/notFound';
import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

type State = {
    Slide: {
        isAlreadyLogin:boolean;
    }
}

const MiddlewareAuth = ( {children} : {children:ReactNode} ) => {
    const IsLogin = useSelector((state:State) => state.Slide.isAlreadyLogin)
    
    if(IsLogin){
        return <div>{children}</div>
    }
    return <NotFound/>;
};

export default MiddlewareAuth;