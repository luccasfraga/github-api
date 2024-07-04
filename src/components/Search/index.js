import { useEffect } from 'react';
import * as Styled from './styles';

function Search({ username, onSetUsername }) {
  useEffect(() => {
    const userName = localStorage.getItem('userName') || '';
    onSetUsername(userName);
  }, [onSetUsername])

  return (
    <Styled.Content>
      <Styled.Input
          type="text"
          value={username}
          onChange={(e) => onSetUsername(e.target.value)}
          placeholder="Username do usuário do GitHub"
      />
    </Styled.Content>
  );
}

export default Search;
