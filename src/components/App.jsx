import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Note, { NewNote } from './Note'
import Footer from './Footer'
import notes from "../notes"

export default function App() {
    let [myNotes,setNotes]= useState(notes)
    return (
        <>
            <Sidebar />
            <NewNote updateNotes={setNotes}/>
            <div className='notes_container'>
                {myNotes.map(note => <Note id={note.id} updateNotes={setNotes} key={note.id} title={note.title} content={note.content} /> )}
            </div>
            <Footer/>
        </>
    )
}
