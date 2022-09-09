import ReactDOM from "react-dom";
import ControlHeader from "../index";

test("renders without crashing", () => {
  const div = document.createElement("DIV");
  ReactDOM.render(<ControlHeader />, div);
});
