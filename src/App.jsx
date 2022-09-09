import { Route, Routes } from "react-router-dom";
import Offworld from "./widgets/Offworld";
import Settings from "./widgets/Settings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Offworld />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default App;
