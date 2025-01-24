'use client';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

type State = {
  Modal: {
    modal: boolean;
  };
};

const ModalWatch = () => {
  const modal = useSelector((state: State) => state.Modal.modal);
    
  useEffect(() => {
    if (modal) {
      // Disable scrolling when a modal is open
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
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

  return null; // No UI output
};

export default ModalWatch;



// This basically does watch when even one modal is open then it overflow hidden the body so that you dont have to do it in each modal