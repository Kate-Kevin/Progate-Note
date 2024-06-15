import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'



const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  deleteNote,
  editNote,
  setSelectedNote,
  selectedNote
}) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
          editNote={editNote}
          setSelectedNote={setSelectedNote}
        />
      )
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
    case 'edit':
      return <EditNote selectedNote={selectedNote} setCurrentPage={setCurrentPage} editNote={editNote} />
    default:
      return <Home />
  }
}



const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])

  const [note, setSelectedNote] = useState(null)

  const addNote = (title, desc) => {
    const id =
      noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ])
  }

  const deleteNote = (id) => {
    const filteredNote = noteList.filter((note) => note.id !== id)
    setNoteList(filteredNote)
  }

  const selectedNote = (id) => {
    const note = noteList.find((note) => note.id === id)
    setSelectedNote(note)

  }

  const editNote = (title, desc, id) => {
    const updatedNotes = noteList.map((note) =>
      note.id === id ? { ...note, title, desc } : note
    );
    setNoteList(updatedNotes)
  }

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      deleteNote={deleteNote}
      editNote={editNote}
      setSelectedNote={selectedNote}
      selectedNote={note}
    />
  )
}

export default App