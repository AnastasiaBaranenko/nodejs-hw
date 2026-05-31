import { Router } from 'express';
import {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
  updateNote,
} from '../controllers/notesController.js';

const router = Router();

router.get('/notes', getAllNotes);
router.get('/notes/:notesId', getNoteById);
router.post('/notes', createNote);
router.delete('/notes/:notesId', deleteNote);
router.patch('/notes/:notesId', updateNote);

export default router;
