import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

interface Note {
  title: string;
  content: string;
}

let notes: Note[] = [];

// GET all notes
app.get('/api/notes', (req: Request, res: Response) => {
  res.json(notes);
});

// POST new note
app.post('/api/notes', (req: Request, res: Response) => {
  const note: Note = req.body;
  notes.push(note);
  res.status(201).json(note);
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});