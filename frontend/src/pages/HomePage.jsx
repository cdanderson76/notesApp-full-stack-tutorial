import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";

export default function HomePage() {

  const [ isRateLimited, setIsRateLimited ] = useState(false);
  const [ notes, setNotes ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await axios.get('http://localhost:5001/api/notes');
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch(error) {
        console.error('Error fetching notes', error);

        if(error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error('Failed to load notes');
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
    </div>
  )
}