export default function Project() {
  return (
    <>
      <div className="text-2xl font-semibold pt-5 items-center justify-center  flex flex-row">
        <img
          className="logo fill-slate-600 w-12 h-12"
          src="logo.svg"
          alt="logo"
        ></img>
        <h1 className="">Domynotes</h1>
      </div>
      <div className="pt-5 pl-4">
        <ul className="space-y-2">
          <li>
            <a href="">Personal</a>
          </li>
          <li>
            <a href="">Business</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
