import { Request, Response, NextFunction } from 'express';

import { createNote, getAllNotes, deleteNote, updateNote, getNoteById } from './note.service'

export async function createNoteHandler(req: Request, res: Response, next: NextFunction) {
  const myNote = req.body;

  const newNotes = await createNote(myNote)

  return res.json(newNotes)
}

export async function getNotesHandler(req: Request, res: Response) {
  const notes = await getAllNotes();

  return res.json(notes)
}

export async function getNoteByIdHandler(req: Request, res: Response) {
  const noteId = req.params.noteId;

  const note = await getNoteById(noteId);

  return res.json(note)
}

export async function updateNoteHandler(req: Request, res: Response) {
  const noteId = req.params.noteId;
  const note = req.body;

  const updatedNote = await updateNote(noteId, note);

  return res.json(updatedNote)
}

export async function deleteNoteHandler(req: Request, res: Response) {
  const noteId = req.params.noteId;

  const deletedNote = await deleteNote(noteId);

  return res.json(deletedNote)
}
