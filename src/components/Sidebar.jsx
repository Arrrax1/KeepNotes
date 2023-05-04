import React from 'react'
import logo from '../assets/notes_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    function newNote() {
        document.getElementById("newNote").classList.toggle("new_note_visible")
    }
    return (
        <div className='sidebar'>
            <div className='logo_container'>
                <img src={logo} alt="notes_logo" aria-label='hidden' />
            </div>
            <div className='addIcon_container closeEffect' onClick={newNote}  name="add_note_div">
                <FontAwesomeIcon icon={faPlus} className='add_note_svg'/>
            </div>
        </div>
    )
}

export default Sidebar