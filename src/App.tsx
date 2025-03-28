import FormBuilder from "./form-builder/FormBuilder";
import Navigation from "./components/Navigation";
// import SettingsPage from "./pages/settings/SettingsPage";

function App() {
  return (
    <div className="flex">
      <div className="p-5 mt-10 flex-2 border border-gray-200 xs:hidden sm:hidden md:block lg:block xl:block">
        <Navigation />
      </div>
      <div className="flex-9">
        <FormBuilder />
        {/* <SettingsPage /> */}
      </div>
    </div>
  );
}

export default App;
