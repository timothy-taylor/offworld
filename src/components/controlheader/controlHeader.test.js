import ReactDOM from 'react-dom';
import ControlHeader from './controlHeader';

test("renders without crashing", () => {
  const div = document.createElement('DIV');
  ReactDOM.render(<ControlHeader />,div);
});
