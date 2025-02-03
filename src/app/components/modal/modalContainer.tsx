'use client'

import React,{useEffect} from 'react';
import AdminAuth from './modal-components/adminAuth';
import { useSelector } from 'react-redux';
import UploadProgress from './modal-components/upload-progress';
import SuccesUpload from './modal-components/succes-upload';


type State = {
    Modal: {
      modal: boolean;
    };
  };
  

const ModalContainer = () => {


    const modal = useSelector((state: State) => state.Modal.modal);
    
    useEffect(() => {
        if (modal) {
            // Disable scrolling when a modal is open
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'absolute';
            document.body.style.width = '100%';
        } else {
            // Restore scrolling when no modal is open
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        }

    // Cleanup on unmount
        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.width = '';
        };
    }, [modal]);
    
    
    return (
        <main>
            <AdminAuth/>
            <UploadProgress/>
            <SuccesUpload/>
        </main>
    );
};

export default ModalContainer;