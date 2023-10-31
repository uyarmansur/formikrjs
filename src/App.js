import "./App.css";
import { Routes, Route } from "react-router-dom";
import GeneralForm from "./components/GeneralForm";
import PortalForm from "./components/PortalForm";
import WrongPath from "./components/WrongPath";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GeneralForm />} />
        <Route path="/portal" element={<PortalForm />} />
        <Route path="*" element={<WrongPath />} />
      </Routes>
    </div>
  );
}

export default App;
