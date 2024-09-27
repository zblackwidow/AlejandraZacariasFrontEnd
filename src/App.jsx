import "./App.css";
import Navbar from "./navbar";
import ContainerCards from "./cards";
// print page
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col items-end ">
        <h2 className="mr-28 mb-10 font-extrabold text-3xl">
          Grand American Touring
        </h2>
        <ContainerCards></ContainerCards>
      </div>
      <div className="flex justify-center m-16">
        <button
          onClick={() => alert("Todavía no agregue más")}
          className="bg-black border-2 rounded-tl-lg rounded-br-lg w-36 h-14"
          type="button"
        >
          <p className="text-white font-bold">More Harley's</p>
        </button>
      </div>
      <div className="flex flex-col items-start ">
        <h2 className="ml-28 mb-10 font-extrabold text-3xl">
          Sport
        </h2>
        <ContainerCards></ContainerCards>

      </div>
    </>
  );
}

export default App;
