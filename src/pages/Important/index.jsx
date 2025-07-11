// Important Page Component
import React from 'react';
import { useNotes } from '../../context/notes-context';
import NotesCard from '../../components/NotesCard';
import { MdStar } from "react-icons/md";

const Important = () => {
  const { notes } = useNotes();
  const ImportantNotes = notes.filter(note => note.isImportant && !note.isDeleted && !note.isArchived);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <MdStar className="text-orange-500" />
          Important Notes
        </h1>
        
        {ImportantNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ImportantNotes.map(({ title, isArchived, text, id, isPinned, isDeleted, isImportant }) => (
              <NotesCard
                key={id}
                id={id}
                title={title}
                text={text}
                isArchived={isArchived}
                isPinned={isPinned}
                isDeleted={isDeleted}
                isImportant={isImportant}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-16">
            <MdStar className="text-8xl text-orange-300 mb-6" />
            <h2 className="text-2xl font-bold text-gray-600 mb-3">No Important Notes</h2>
            <p className="text-gray-500 text-lg">Mark notes as important by clicking the star icon</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Important;