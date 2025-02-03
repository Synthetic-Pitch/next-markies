'use client';

import React, { ReactNode, createContext, useState } from 'react';

type FileContextType = {
    fileData: File | null;  // Store only the file, not FormData
    setFileData: (data: File | null) => void;
};

export const FileContext = createContext<FileContextType>({
    fileData: null,
    setFileData: () => {},
});

const FormWrapper = ({ children }: { children: ReactNode }) => {
    const [fileData, setFileData] = useState<File | null>(null); // Store File instead of FormData
    
    return (
        <FileContext.Provider value={{ fileData, setFileData }}>
            {children}
        </FileContext.Provider>
    );
};

export default FormWrapper;
