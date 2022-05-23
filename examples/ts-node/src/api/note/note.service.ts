import { DocumentDefinition } from 'mongoose';

import Note, { NoteDocument } from "./note.model"

export async function createNote(note: DocumentDefinition<NoteDocument>) {
  try {
    const newNote = await Note.create(note);
    return newNote
  } catch (error: any) {
    throw new Error(error)
  }
}

export async function getAllNotes(): Promise<DocumentDefinition<NoteDocument>[]> {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    return notes;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getNoteById(id: string): Promise<DocumentDefinition<NoteDocument>> {
  try {
    const note = await Note.findById(id);

    if (!note) {
      throw new Error('Note not found');
    }

    return note;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function updateNote(id: string, note: DocumentDefinition<NoteDocument>) {
  try {
    const updatedNote = await Note.findByIdAndUpdate(id, note, { new: true });
    return updatedNote;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function deleteNote(id: string) {
  try {
    const deletedNote = await Note.findByIdAndDelete(id);
    return deletedNote;
  } catch (error: any) {
    throw new Error(error);
  }
}
