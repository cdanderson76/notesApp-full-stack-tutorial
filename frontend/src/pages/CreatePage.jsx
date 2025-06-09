import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CreatePage() {

  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ loading, setLoading ] = useState(false);

  function handleSubmit() {

  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={'/'} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className='size-5'/>
            Back to Notes
          </Link>
          <div className="card bg-base-100">
          <div className='card-body'>
            <h2 className="card-title text-2xl mb-4">Create New Note</h2>
            <form>
              <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input type="text" 
                       placeholder="Note Title"
                       className="input input-bordered" />
              </div>
              <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Content</span>
              </label>
              <textarea
                        placeholder="Write your note here..."
                        className="textarea textarea-bordered h-32" />
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary"
                        type='submit'>Create Note</button>
              </div>
            </form>
          </div>
          </div>
        </div>
      </div> 
    </div>
  )
}