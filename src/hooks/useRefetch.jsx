import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
export default function useRefetch() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const refetchPosts = path => {
    queryClient.refetchQueries('posts');
    setTimeout(() => {
      if (path) {
        navigate(`/${path}`);
      } else {
        navigate(-1);
      }
    }, 1000);
  };
  return [refetchPosts];
}
