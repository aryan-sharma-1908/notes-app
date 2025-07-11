import NotesCard from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";
import { IoMdAdd } from "react-icons/io";

const Home = () => {
  const { title, text, notes } = useNotes();
  const { notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };

  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  const onAddClick = () => {
    if (title.trim() === "" && text.trim() === "") return;
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  };

  const PinnedNotes = notes.filter((note) => note.isPinned && !note.isArchived && !note.isDeleted).sort((a,b) => b.isImportant - a.isImportant);
  const OtherNotes = notes.filter((note) => !note.isPinned && !note.isArchived && !note.isDeleted).sort((a,b) => b.isImportant - a.isImportant);

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 relative overflow-hidden">
          <input
            className="w-full p-4 text-lg font-medium placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-t-lg"
            type="text"
            placeholder="Take a note..."
            onChange={onTitleChange}
            value={title}
          />
          <textarea
            className="w-full p-4 text-gray-700 placeholder-gray-500 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-b-lg resize-none"
            placeholder="What's on your mind?"
            onChange={onTextChange}
            value={text}
            rows="4"
          />
          <div className="absolute bottom-3 right-3">
            <button
              disabled={title.trim() === "" && text.trim() === ""}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-2 rounded-full transition-all duration-200 active:scale-95 shadow-lg"
              onClick={onAddClick}
            >
              <IoMdAdd className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Notes Display Section */}
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Pinned Notes */}
        {PinnedNotes?.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-yellow-500">📌</span>
              Pinned Notes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {PinnedNotes.map(({ id, title, text, isPinned, isArchived, isDeleted, isImportant }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                  isArchived={isArchived}
                  isDeleted={isDeleted}
                  isImportant={isImportant}
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Notes */}
        {OtherNotes?.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span className="text-blue-500">📝</span>
              Other Notes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {OtherNotes.map(({ id, title, text, isPinned, isArchived, isDeleted, isImportant }) => (
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                  isArchived={isArchived}
                  isDeleted={isDeleted}
                  isImportant={isImportant}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {PinnedNotes.length === 0 && OtherNotes.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-6 text-gray-300">📝</div>
            <div className="text-2xl font-bold text-gray-600 mb-3">
              No Notes Yet
            </div>
            <p className="text-gray-500 text-lg">
              Start by creating your first note above!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;