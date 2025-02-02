'use client'

import React, { ReactNode,createContext, useState } from 'react';

type FileContextType = {
    fileData:FormData | null;
    setFileData:(data:FormData | null) => void;
}

export const FileContext = createContext<FileContextType>(
    {
        fileData:null,
        setFileData:() => {},
    }
)

const FormWrapper = ({children}:{children:ReactNode}) => {
    const [fileData, setFileData] = useState<FormData | null>(null);
    
    return (
        <FileContext.Provider value={{fileData, setFileData}}>
            {children}
        </FileContext.Provider>
    );
};

export default FormWrapper;