import { useQuery } from 'react-query';
import Container from '../components/common/Container';
import Table from '../components/common/Table';
import Title from '../components/common/Title';
import WriteBtn from '../components/common/WriteBtn';
import { fetchAllPosts } from '../api/firebase';

export default function Home() {
  const {
    isLoading,
    error,
    data: posts,
  } = useQuery(
    ['posts'],
    () => {
      return fetchAllPosts();
    },
    { staleTime: 1000 * 60 * 10 }
  );
  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생 ㅠ_ㅠ...</p>;
  return (
    <Container>
      <Title title='최근 게시글' />
      <WriteBtn />
      <Table posts={posts ? posts : ''} />
    </Container>
  );
}
