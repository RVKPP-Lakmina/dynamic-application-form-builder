import FormBuilder from "./form-builder/FormBuilder";
import ThemeWrapper from "./providers/ThemeWrapper";

function App() {
  return (
    <ThemeWrapper>
      <FormBuilder formId="rdbApplication" />;
    </ThemeWrapper>
  );
}

export default App;
