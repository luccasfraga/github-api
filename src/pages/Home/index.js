import { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useFetchUser } from '../../hooks/useFetchUser'
import Search from '../../components/Search'
import * as Styled from './styles';

function Home() {
  const [username, setUsername] = useState('');
  const {data, isLoading, isFetching, isError, error } = useFetchUser({ username })
  
  return (
    <div>
     <Search
        username={username}
        onSetUsername={setUsername}
      />
      <Styled.Container>
        {(isLoading || isFetching) && <Skeleton count={5} height={30} />}
        {isError && <h1>Error: {error.message}</h1>}

        {data && (
          <Styled.Content>
            <Styled.Avatar src={data?.avatar_url} alt={data?.name} />
            <div>
              <Styled.Information>
                <b>Bio:</b> {data?.bio || 'Usuário sem bio'}
              </Styled.Information>
              <Styled.Information>
                <b>Número de seguidores:</b> {data?.followers}
              </Styled.Information>
              <Styled.Information>
                <b>Número de seguidos:</b> {data?.following}
              </Styled.Information>
              <Styled.Information>
                <b>E-mail:</b> {data?.email}
              </Styled.Information>
            </div>
          </Styled.Content>
        )}
      </Styled.Container>
      
    </div>
  )
}

export default Home