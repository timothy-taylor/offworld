import ReactDOM from "react-dom";
import Settings from "../index";

test("renders without crashing", () => {
  const div = document.createElement("DIV");
  ReactDOM.render(<Settings />, div);
});
