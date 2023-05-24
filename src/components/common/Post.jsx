import { useNavigate } from 'react-router-dom';
import useTimestamp from '../../hooks/useTimestamp';

export default function Post({ post }) {
  const { category, id, title, author, date, like } = post;
  const navigate = useNavigate();
  const [getDate] = useTimestamp();
  const timestamp = getDate(date);

  const handleClick = () => {
    navigate(`/music/${id}`, { state: post });
  };

  return (
    <tr>
      <td>{category}</td>
      <td className='cursor-pointer hover:text-primary' onClick={handleClick}>
        {title}
      </td>
      <td>{author}</td>
      <td>{timestamp}</td>
      <td>{like}</td>
    </tr>
  );
}
