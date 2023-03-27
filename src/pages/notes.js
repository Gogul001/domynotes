import Project from "../pages/notes/project";
import NotesList from "../pages/notes/noteslist";
import LargeNotes from "./notes/largenotes";
export default function NotesPage() {
  return (
    <>
      <div className="flex h-screen">
        <div className="w-2/12 bg-red-800">
          <Project />
        </div>
        <div className="w-3/12 bg-orange-900">
          <NotesList />
        </div>
        <div className="w-7/12 bg-yellow-500">
          <LargeNotes />
        </div>
      </div>
    </>
  );
}
