import { Route, Routes } from 'react-router';
import NoteDetailPage from './pages/NoteDetailPage';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage';

export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/create' element={ <CreatePage /> } />
        <Route path='/note/:id' element={ <NoteDetailPage /> } />
      </Routes>
    </div>
  )
}