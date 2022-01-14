import ReactDOM from 'react-dom';
import Info from './info';
import Player from '../player';

test("renders without crashing", () => {
  const player = Player;
  const div = document.createElement('DIV');
  ReactDOM.render(<Info player={player} />,div);
});
