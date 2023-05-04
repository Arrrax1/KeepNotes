import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Note, { NewNote } from './Note'
import Footer from './Footer'
import notes from "../notes"

export default function App() {
    let [myNotes,updateNotes]= useState(notes)
    return (
        <>
            <Sidebar />
            <NewNote/>
            <div className='notes_container'>
                {myNotes.map(note => <Note key={note.id} title={note.title} content={note.content} />)}
                {myNotes.map(note => <Note key={note.id} title={note.title} content={note.content} />)}
            </div>
            <Footer/>
        </>
    )
}
