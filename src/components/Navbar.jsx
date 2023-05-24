import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiPencilFill } from 'react-icons/ri';
import PrimaryBtn from './common/PrimaryBtn';
import { useState } from 'react';
import SmMenu from './SmMenu';

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const handleMenu = () => {
    setIsMenu(prev => !prev);
  };
  return (
    <header className='flex items-center justify-between py-2 px-4 mb-4 border-b-2 border-gray-300'>
      <Link to='/'>
        <h1 className='text-2xl font-bold hover:text-primary'>칼림바랑</h1>
      </Link>

      <button
        onClick={handleMenu}
        className='md:hidden text-xl hover:text-primary'
        type='button'
      >
        <span className='sr-only'>메뉴</span>
        <GiHamburgerMenu />
      </button>

      {isMenu && <SmMenu handleMenu={handleMenu} />}

      <ul className='hidden md:flex text-lg font-semibold nav-list'>
        <li>
          <Link to='music'>악보</Link>
        </li>
        <li>
          <Link to='knowhow'>노하우</Link>
        </li>
      </ul>

      <div className='hidden md:flex items-center user-info'>
        {/* <PrimaryBtn text='로그인' /> */}
        <Link to='edit' className='text-xl px-2 hover:text-primary'>
          <span className='sr-only'>글쓰기</span>
          <RiPencilFill />
        </Link>
        <img
          className='w-10 h-1w-10 rounded-full'
          src='http://via.placeholder.com/100'
          alt=''
        />
        <strong>닉네임</strong>
        <PrimaryBtn text='로그아웃' />
      </div>
    </header>
  );
}
