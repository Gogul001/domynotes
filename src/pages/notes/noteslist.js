import SmallNotes from "./smallnotes";

export default function NotesList() {
  return (
    <>
      <div className="flex justify-center pt-14">
        <button
          type="button"
          class="py-2 px-5 text-sm font-medium text-blue-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Add Notes
        </button>
      </div>
      <div className="py-3 px-4">
        <input
          type="text"
          id="first_name"
          className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
        />
      </div>
      <div className="space-y-5 px-4 pt-5">
        <SmallNotes />
        <SmallNotes />
        <SmallNotes />
      </div>
    </>
  );
}
