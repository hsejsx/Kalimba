import Container from '../components/common/Container';
import Table from '../components/common/Table';
import Title from '../components/common/Title';
import WriteBtn from '../components/common/WriteBtn';
import useFetchPosts from '../hooks/useFetchPosts';

export default function Knowhow() {
  const [isLoading, error, posts] = useFetchPosts();
  if (isLoading) return <p>로딩중...</p>;
  if (error) return <p>에러 발생 ㅠ_ㅠ...</p>;
  if (posts)
    return (
      <Container>
        <Title title='노하우 게시판' />
        <WriteBtn />
        <Table posts={posts} />
      </Container>
    );
}
