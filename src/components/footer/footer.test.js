import ReactDOM from 'react-dom';
import Footer from './footer';

test("renders without crashing", () => {
  const div = document.createElement('DIV');
  ReactDOM.render(<Footer />,div);
});
