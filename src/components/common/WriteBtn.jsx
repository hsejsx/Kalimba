import { Link } from 'react-router-dom';

export default function WriteBtn({ onClick }) {
  return (
    <Link
      to='/edit'
      onClick={onClick}
      className='self-end flex items-center justify-center w-24 py-2 px-3 mb-4 text-white bg-black hover:opacity-80'
      type='button'
    >
      글쓰기
    </Link>
  );
}
