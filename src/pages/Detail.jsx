import { useLocation } from 'react-router';
import Container from '../components/common/Container';
import Title from '../components/common/Title';
import useTimestamp from '../hooks/useTimestamp';

export default function Detail() {
  const { category, id, title, author, date, like, content } =
    useLocation().state;
  const [getDate] = useTimestamp();
  const timestamp = getDate(date);
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
      <p>{content}</p>
    </Container>
  );
}
