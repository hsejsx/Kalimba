import { useQuery } from 'react-query';
import { useLocation } from 'react-router-dom';
import { fetchPosts } from '../api/firebase';

export default function useFetchPosts() {
  const path = useLocation().pathname;
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(
    ['posts', path],
    () => {
      return fetchPosts(path);
    },
    { staleTime: 1000 * 60 * 10 }
  );
  return [isLoading, error, posts];
}
