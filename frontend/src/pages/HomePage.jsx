import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import api from "../../lib/axios";
import { useState, useEffect } from 'react';
import NoteCard from "../components/NoteCard";
import NotesNotFound from "../components/NotesNotFound";

export default function HomePage() {

  const [ isRateLimited, setIsRateLimited ] = useState(false);
  const [ notes, setNotes ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await api.get('/notes');
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
        setLoading(false);
      } catch(error) {
        console.log('Error fetching notes');

        if(error.response?.status === 429) {
          console.log('RATELIMIT')
          setIsRateLimited(true);
        } else {
          console.log('Failed to load notes');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      { isRateLimited && <RateLimitedUI /> }

      <div className="max-w-7xl mx-auto p-4 mt-6">

        { !notes === 0 && !isRateLimited && <NotesNotFound /> }

        { loading && <div className="text-center text-primary py-10">Loading notes...</div> }

        { notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            { notes.map(note => (
              <div key={note._id}>
                <NoteCard note={note} setNotes={setNotes}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}