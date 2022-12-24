import "./App.css";
import Form from "./components/Form";
import { FormProvider } from "./context/FormContext";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <FormProvider>
        <Header />
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
