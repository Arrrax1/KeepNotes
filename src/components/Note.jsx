import React, { useState } from 'react'
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

function NewNote(props) {
    let i = 4;
    let [note, setNote] = useState({ title: "", content: "" })
    let updateNotesList = props.updateNotes;

    function updateNote(event) {
        let { name: caller, value } = event.target;
        setNote(prevValue => {
            return ({
                ...prevValue,
                [caller]: value
            })
        })
    }

    function addNote() {
        let newNote={
            id:i++,
            ...note
        }
        updateNotesList(prevValue => [...prevValue,newNote])
    }

    return (
        <div className='new_note closeEffect' id="newNote" >
            <div className='closeEffect'>
                <input name="title" value={note.title} onChange={updateNote} type="text" className='note_title_input closeEffect' />
                <i className='closeEffect pinIcon' onClick={addNote}>
                    <FontAwesomeIcon icon={faThumbtack} className='pinIcon closeEffect' />
                </i>
            </div>
            <textarea name="content" value={note.content} onChange={updateNote} type="text" className='note_content_input closeEffect' />
        </div>
    )
}
export default Note;
export { NewNote };
