// Updated NotesCard Component with Important feature
import React from "react";
import { useNotes } from "../../context/notes-context";
import { TiPinOutline, TiPin } from "react-icons/ti";
import { MdOutlineStar, MdStar } from "react-icons/md"; // Add star icons
import {
  MdOutlineArchive,
  MdDeleteOutline,
  MdOutlineUnarchive,
  MdRestoreFromTrash,
  MdDeleteForever 
} from "react-icons/md";

const NotesCard = ({ id, title, text, isPinned, isArchived, isDeleted, isImportant }) => {
  const { notesDispatch } = useNotes();
  
  const onPinClick = (id) => {
    notesDispatch({
      type: "PIN/UNPIN",
      payload: id,
    });
  };
  
  const onArchiveClick = (id) => {
    notesDispatch({
      type: "ADD_TO_ARCHIVE",
      payload: id,
    });
  };

  const onDeleteClick = (id) => {
    notesDispatch({
      type: "DELETE_NOTE",
      payload: id,
    });
  };
  
  const onPermanentDeleteClick = (id) => {
    notesDispatch({
      type: "PERMANENT_DELETE",
      payload: id,
    });
  };

  const onImportantClick = (id) => {
    notesDispatch({
      type: "TOGGLE_IMPORTANT",
      payload: id,
    });
  };

  return (
    <div className={`
      bg-white rounded-xl shadow-md border border-gray-200 
      hover:shadow-lg transition-all duration-200 hover:-translate-y-1
      w-full max-w-sm p-0 overflow-hidden
      ${isPinned ? 'ring-2 ring-yellow-300' : ''}
      ${isArchived ? 'bg-yellow-50' : ''}
      ${isDeleted ? 'bg-red-50' : ''}
      ${isImportant ? 'ring-2 ring-orange-300' : ''}
    `}>
      {/* Header */}
      <div className="flex justify-between items-start p-4 border-b border-gray-100">
        <h3 className="font-semibold text-gray-800 text-lg truncate flex-1 mr-2">
          {title || "Untitled"}
        </h3>
        <div className="flex gap-1">
          {/* Important Star Button */}
          {(!isDeleted && !isArchived) && (
            <button 
              className="text-gray-400 hover:text-orange-500 transition-colors duration-200 active:scale-95 p-1" 
              onClick={() => onImportantClick(id)}
              title={isImportant ? "Remove from important" : "Mark as important"}
            >
              {isImportant ? (
                <MdStar className="text-xl text-orange-500" />
              ) : (
                <MdOutlineStar className="text-xl" />
              )}
            </button>
          )}
          
          {/* Pin Button */}
          {(!isDeleted && !isArchived) && (
            <button 
              className="text-gray-400 hover:text-yellow-500 transition-colors duration-200 active:scale-95 p-1" 
              onClick={() => onPinClick(id)}
              title={isPinned ? "Unpin note" : "Pin note"}
            >
              {isPinned ? (
                <TiPin className="text-xl text-yellow-500" />
              ) : (
                <TiPinOutline className="text-xl" />
              )}
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-600 text-sm line-clamp-4 mb-4 whitespace-pre-wrap">
          {text || "No content"}
        </p>
        
        {/* Action Buttons */}
        <div className="flex justify-end gap-2">
          {!isDeleted && (
            <button
              onClick={() => onArchiveClick(id)}
              className="text-gray-400 hover:text-orange-500 transition-colors duration-200 active:scale-95 p-2 rounded-full hover:bg-orange-50"
              title={isArchived ? "Unarchive note" : "Archive note"}
            >
              {isArchived ? (
                <MdOutlineUnarchive className="text-xl" />
              ) : (
                <MdOutlineArchive className="text-xl" />
              )}
            </button>
          )}
          
          <button
            onClick={() => onDeleteClick(id)}
            className="text-gray-400 hover:text-red-500 transition-colors duration-200 active:scale-95 p-2 rounded-full hover:bg-red-50"
            title={isDeleted ? "Restore note" : "Delete note"}
          >
            {isDeleted ? (
              <MdRestoreFromTrash className="text-xl" />
            ) : (
              <MdDeleteOutline className="text-xl" />
            )}
          </button>

          {isDeleted && (
            <button
              onClick={() => onPermanentDeleteClick(id)}
              className="text-gray-400 hover:text-red-600 transition-colors duration-200 active:scale-95 p-2 rounded-full hover:bg-red-50"
              title="Delete permanently"
            >
              <MdDeleteForever className="text-xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesCard;