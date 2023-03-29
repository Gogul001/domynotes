export default function SmallNotes(props) {
  return (
    <>
      {props.data.data.map((notename) => (
        <div className="text-2xl">
          <h1>
            <a href="">{notename.notename}</a>
          </h1>
        </div>
      ))}
      <br className="h-1 bg-black" />
    </>
  );
}
