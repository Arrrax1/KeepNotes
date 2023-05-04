import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack } from '@fortawesome/free-solid-svg-icons'

let colors = ["#ffeaa7", "#FFA00022", "#FFA00044"]
function Note(props) {
    return (
        <div className='note' style={{ backgroundColor: colors[Math.floor(Math.random() * 3)] }}>
            <div className='note_title'>{props.title}</div>
            <div className='note_content'>{props.content}</div>
        </div>
    )
}

function NewNote() {
    return (
        <div className='new_note closeEffect' id="newNote" >
            <div>
                <input type="text" className='note_title_input closeEffect' />
                <FontAwesomeIcon icon={faThumbtack} className='closeEffect pinIcon' />
            </div>
            <textarea type="text" className='note_content_input closeEffect' />
        </div>
    )
}
export default Note;
export { NewNote };
