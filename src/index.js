import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

document.addEventListener('click', (event) => {
    let caller = event.target.getAttribute("class");
    if (caller!= null && caller.includes("closeEffect")){
        
    }else{
        document.getElementById("newNote").classList.remove("new_note_visible")
    }
})