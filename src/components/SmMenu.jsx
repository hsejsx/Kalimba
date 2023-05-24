import { Link } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';

export default function SmMenu({ handleMenu }) {
  return (
    <section className='fixed top-0 right-0 bottom-0 left-0 p-4 bg-white md:hidden'>
      <header className='relative flex items-center justify-end pb-4 mb-4 border-b-2 border-gray-300'>
        <h1 className='absolute left-[50%] translate-x-[-50%] text-2xl font-bold hover:text-primary'>
          <Link onClick={handleMenu} to='/'>
            칼림바랑
          </Link>
        </h1>
        <button onClick={handleMenu} className='text-2xl'>
          <span className='sr-only'>닫기</span>
          <GrFormClose />
        </button>
      </header>
      <ul className='flex flex-col text-lg font-semibold nav-list'>
        <li>
          <Link to='music' onClick={handleMenu}>
            악보
          </Link>
        </li>
        <li>
          <Link to='knowhow' onClick={handleMenu}>
            노하우
          </Link>
        </li>
      </ul>
    </section>
  );
}
