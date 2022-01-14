import ReactDOM from 'react-dom';
import MainCanvas from './mainCanvas';

test("renders without crashing", () => {
  const div = document.createElement('DIV');
  ReactDOM.render(<MainCanvas />,div);
});
