import ReactDOM from 'react-dom';
import Settings from './settings';

test("renders without crashing", () => {
  const div = document.createElement('DIV');
  ReactDOM.render(<Settings />,div);
});
