import { Route, Routes } from "react-router-dom";
import Offworld from "./components/Offworld";
import Settings from "./components/Settings";
import { useAtom } from "jotai";
import { userAtom } from "./stores/user-store";

const App = () => {
  //
  // atoms don't initialize until they are consumed for
  // the first time , so here we are prefetching user auth
  useAtom(userAtom);

  return (
    <Routes>
      <Route path="/" element={<Offworld />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default App;
