import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function HomePage() {

  const [ isRateLimited, setIsRateLimited ] = useState(false);
  const [ notes, setNotes ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await axios.get('http://localhost:5001/api/notes');
        console.log(res.data);
      } catch(error) {
        console.error('Error fetching notes', error);
      }
    }
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      { isRateLimited && <RateLimitedUI /> }
    </div>
  )
}