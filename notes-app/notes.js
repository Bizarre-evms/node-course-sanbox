const fs = require('fs')
const chalk = require('chalk')
const fileName = 'notes.json'

const addNote = (title, body) => {
    const notes = loadNotes()
    if (!findExistingNote(notes,title)) {
        debugger
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)
        console.log(chalk.green('Added a new note with the title: ' + title))
    } else {
        console.log(chalk.red('Note with same title exists'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    if (!findExistingNote(notes, title)) {
        console.log(chalk.red('Unable to find the note with title ' + title))
    } else {
        const updatedNotes = notes.filter((note) => note.title !== title)
        saveNote(updatedNotes)
        console.log(chalk.green('Removed a note with title: ' + title))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bold.blue('Your notes'))
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = findExistingNote(notes, title)
    if (!note) {
        console.log(chalk.red('No note found with title ' + title))
    } else {
        console.log(chalk.bold.blue(note.title))
        console.log(note.body)
    }
}

const findExistingNote = (notes, title) => {
    return notes.find((note) => note.title === title)
}

const saveNote = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync(fileName, data)
}

const loadNotes = () => {
    try {
        const notesData = fs.readFileSync(fileName).toString()
        return JSON.parse(notesData)
    } catch(e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
