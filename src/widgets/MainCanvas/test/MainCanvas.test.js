import ReactDOM from "react-dom";
import MainCanvas from "../index";

test("renders without crashing", () => {
  const div = document.createElement("DIV");
  ReactDOM.render(<MainCanvas />, div);
});
