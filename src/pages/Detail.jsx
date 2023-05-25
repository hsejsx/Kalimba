import { useLocation } from 'react-router';
import Container from '../components/common/Container';
import Title from '../components/common/Title';
import useTimestamp from '../hooks/useTimestamp';
import PrimaryBtn from '../components/common/PrimaryBtn';
import { removePost } from '../api/firebase';
import useRefetch from '../hooks/useRefetch';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Detail() {
  const { category, id, title, author, date, like, content, uid } =
    useLocation().state;
  const { user } = useContext(AuthContext);
  const path = useLocation().pathname;
  const [refetchPosts] = useRefetch();
  const [getDate] = useTimestamp();
  const timestamp = getDate(date);

  const handleDelete = () => {
    removePost(path).then(() => {
      refetchPosts();
    });
  };
  return (
    <Container>
      <Title title={title} />
      <dl className='flex dl mb-4 text-gray-500'>
        <div>
          <dt>작성자</dt>
          <dd>{author}</dd>
        </div>
        <div>
          <dt>작성일</dt>
          <dd>{timestamp}</dd>
        </div>
      </dl>
      <pre>{content}</pre>
      {(user?.isAdmin === true || user?.uid === uid) && (
        <div className='flex'>
          <PrimaryBtn onClick={handleDelete} text='삭제' />
          <PrimaryBtn text='수정' />
        </div>
      )}
    </Container>
  );
}
