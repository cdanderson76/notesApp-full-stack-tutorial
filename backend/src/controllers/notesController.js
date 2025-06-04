import Note from "../models/notes.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    return res.status(200).json(notes);

  } catch(error) {
    console.error('Error in getAllNotes controller', error);
    return res.status(500).json({ message: `Internal server error` });
  }
};

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    await newNote.save();
    return res.status(201).json({ message:'Note created successfully' });
  } catch(error) {
    console.error('Error in createNote controller', error);
    return res.status(500).json({ message: 'Internal server error'});
  }
};

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content},
      {
        new: true,
      }
    );

    if(!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
     return res.status(200).json(updatedNote);
  } catch(error) {
    console.error('Error in updateNote controller', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export async function deleteNote(req, res) {
  try {
    res.status(200).json({ 'message':'Note deleted successfully' });
  } catch(error) {
    
  }
};