import ReactDOM from "react-dom";
import Zoom from "../index";

test("renders without crashing", () => {
  const div = document.createElement("DIV");
  ReactDOM.render(<Zoom />, div);
});
