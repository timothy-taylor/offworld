import ReactDOM from "react-dom";
import Info from "../index";

test("renders without crashing", () => {
  const div = document.createElement("DIV");
  ReactDOM.render(<Info />, div);
});
