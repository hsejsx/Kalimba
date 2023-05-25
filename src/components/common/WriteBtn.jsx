import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function WriteBtn() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const handleClick = () => {
    navigate('/edit', { state: path });
  };
  return (
    <button
      onClick={handleClick}
      className='self-end flex items-center justify-center w-24 py-2 px-3 mb-4 text-white bg-black hover:opacity-80 disabled:bg-gray-500'
      type='button'
      disabled={!user}
    >
      글쓰기
    </button>
  );
}
