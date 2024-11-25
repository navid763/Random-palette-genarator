import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast({ type, message }) {
    // useEffect(() => {
    //     if (message) {
    //         toast[type](message);
    //     }
    // }, [type, message])


    return (
        <ToastContainer
            position="top-center"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        // transition= Bounce
        />
    )
}

export default Toast