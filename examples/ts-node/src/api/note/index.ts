import { Router } from "express";

import {
  createNoteHandler,
  deleteNoteHandler,
  getNoteByIdHandler,
  getNotesHandler,
  updateNoteHandler,
} from "./note.controller";

import { CreateNoteInput, UpdateNoteInput } from './note.schema'

const router = Router();

router.post('/', createNoteHandler);
router.get('/', getNotesHandler);
router.get('/:noteId', getNoteByIdHandler);
router.patch('/:noteId', updateNoteHandler);
router.delete('/:noteId', deleteNoteHandler);

export default router;
