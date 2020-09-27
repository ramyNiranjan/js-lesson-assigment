
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastView(message,type) {
   toast[type](message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    
  
}

export default ToastView
