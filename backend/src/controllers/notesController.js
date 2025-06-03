import Note from "../models/notes.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
    
  } catch(error) {
    res.status(500).json({ message: `Internal server error` });
  }
};

export async function createNote(req, res) {
  try {
    res.status(201).json({ 'message':'Note created successfully' });
  } catch(error) {
    
  }
};

export async function updateNote(req, res) {
  try {
    res.status(200).json({ 'message':'Note updated successfully' });
  } catch(error) {
    
  }
};

export async function deleteNote(req, res) {
  try {
    res.status(200).json({ 'message':'Note deleted successfully' });
  } catch(error) {
    
  }
};