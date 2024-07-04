import { useQuery } from 'react-query';
import Api from '../../api';
import { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

export function useFetchRepositories({ username }) {
  const [debouncedUsername, setDebouncedUsername] = useState(username);

  useEffect(() => {
    const handler = debounce(() => {
      setDebouncedUsername(username);
      localStorage.setItem('userName', username)
    }, 1200);

    handler();

    return () => {
      handler.cancel();
    };
  }, [username]);

  return useQuery({
    queryKey: ['repositories', 'list', debouncedUsername],
    queryFn: () => Api.fetchRepositories(debouncedUsername),
    enabled: !!debouncedUsername,
  });
}
