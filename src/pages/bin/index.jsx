import React from 'react';
import { useNotes } from '../../context/notes-context';
import NotesCard from '../../components/NotesCard';
import { MdDelete } from "react-icons/md";

const Bin = () => {
  const { notes } = useNotes();
  const DeletedNotes = notes.filter(note => note.isDeleted);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <MdDelete className="text-red-500" />
          Bin
        </h1>
        
        {DeletedNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {DeletedNotes.map(({ title, isArchived, text, id, isPinned, isDeleted }) => (
              <NotesCard
                key={id}
                id={id}
                title={title}
                text={text}
                isArchived={isArchived}
                isPinned={isPinned}
                isDeleted={isDeleted}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-16">
            <MdDelete className="text-8xl text-red-300 mb-6" />
            <h2 className="text-2xl font-bold text-gray-600 mb-3">Bin is Empty</h2>
            <p className="text-gray-500 text-lg">Deleted notes will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bin;