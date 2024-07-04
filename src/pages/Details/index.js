import {  useState } from 'react';
import { useFetchRepositories } from '../../hooks/useFetchRepositories';
import Skeleton from 'react-loading-skeleton'
import { useFetchRepositoryDetails } from '../../hooks/useFetchRepositoryDetails';
import Search from '../../components/Search'
import * as Styled from './styles';

function Details() {
  const [username, setUsername] = useState('');
  const [selectedRepo, setSelectedRepo] = useState(null);
  const { data: repos, isLoading: isLoadingRepos, isFetching: isFetchingRepos, isError: isErrorRepos, error: errorRepos } = useFetchRepositories({ username });
  const { data: repoDetails, isLoading: isLoadingRepoDetails, isFetching:isFetchingRepoDetails, isError: isErrorRepoDetails, error: errorRepoDetails } = useFetchRepositoryDetails(selectedRepo);

  return (
    <div>
      <Search
        username={username}
        onSetUsername={setUsername}
      />
      
      <Styled.Container>
        {(isLoadingRepos || isFetchingRepos) && <Skeleton count={5} height={30} />}
        {isErrorRepos && <p>Error: {errorRepos.message}</p>}
        <Styled.List>
          {repos && repos.map((repo) => (
            <li key={repo?.id} onClick={() => setSelectedRepo(repo?.full_name)}>
              <span>{repo?.name}</span>
            </li>
          ))}
        </Styled.List>

        {selectedRepo && (
          <Styled.ContainerRepo>
            {(isLoadingRepoDetails || isFetchingRepoDetails) && <Skeleton count={5} height={10} />}
            {isErrorRepoDetails && <p>Error: {errorRepoDetails.message}</p>}
            {repoDetails && (
              <div>
                <h2>{repoDetails.name}</h2>
                <p>{repoDetails.description}</p>
                <p>Stars: {repoDetails.stargazers_count}</p>
                <p>Forks: {repoDetails.forks_count}</p>
                <p>Open Issues: {repoDetails.open_issues_count}</p>
              </div>
            )}
          </Styled.ContainerRepo>
        )}
      </Styled.Container>
    </div>
  );
}

export default Details;
