import { useState, useEffect } from 'react';
import axios from 'axios';

interface Note {
  title: string;
  content: string;
}

const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    axios.get('/api/notes')
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  const addNote = async (note: Note) => {
    try {
      const response = await axios.post('/api/notes', note);
      setNotes(prev => [...prev, response.data]);
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  return { notes, addNote };
};

export default useNotes;