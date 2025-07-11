
import React from 'react';
import { useNotes } from '../../context/notes-context';
import NotesCard from '../../components/NotesCard';
import { MdOutlineArchive } from "react-icons/md";

const Archive = () => {
  const { notes } = useNotes();
  const ArchivedNotes = notes.filter(note => note.isArchived);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
          <MdOutlineArchive className="text-orange-500" />
          Archive
        </h1>
        
        {ArchivedNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ArchivedNotes.map(({ title, isArchived, text, id, isPinned, isDeleted }) => (
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
            <MdOutlineArchive className="text-8xl text-orange-300 mb-6" />
            <h2 className="text-2xl font-bold text-gray-600 mb-3">No Archived Notes</h2>
            <p className="text-gray-500 text-lg">Your archived notes will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Archive;
