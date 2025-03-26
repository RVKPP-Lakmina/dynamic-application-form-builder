import FormBuilder from "./form-builder/FormBuilder";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="flex">
      <div className="p-5 mt-10 flex-2 border border-gray-200">
        <Navigation />
      </div>
      <div className="flex-9">
        <FormBuilder />
      </div>
    </div>
  );
}

export default App;
