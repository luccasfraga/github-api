import { NavLink } from 'react-router-dom';
import * as Styled from './styles';

function Aside() {
  return (
    <Styled.Content>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/details" activeClassName="active">Detalhes de um repositório</NavLink>
        </li>
      </ul>
    </Styled.Content>
  );
}

export default Aside;
