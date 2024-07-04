import { useQuery } from 'react-query';
import Api from '../../api';

export function useFetchRepositoryDetails(fullName) {
  return useQuery({
    queryKey: ['repository', 'details', fullName],
    queryFn: () => Api.fetchRepositoryDetails(fullName),
    enabled: !!fullName,
  });
}
