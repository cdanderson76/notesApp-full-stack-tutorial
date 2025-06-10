import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ArrowLeft, LoaderIcon, Trash2Icon } from 'lucide-react';
import api from "../../lib/axios";

export default function NoteDetailPage() {

  const [ note, setNote ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ saving, setSaving ] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    async function fetchNote() {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch(error) {
        console.log(error.message);
      } finally {
        setLoading(false)
      }
    }
    fetchNote()
  }, [id]);

  async function handleDelete() {

  }

  if(loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className='animate-spin size-10' />
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to={'/'} className="btn btn-ghost mb-6">
              <ArrowLeft className='size-5'/>
              Back to Notes
            </Link>
            <button className="btn btn-error btn-outline">
              <Trash2Icon className="h-5 w-5"/>
              Delete Note
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}