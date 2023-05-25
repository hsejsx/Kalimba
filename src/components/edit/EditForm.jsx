import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { writePost } from '../../api/firebase';
import { useLocation, useNavigate } from 'react-router-dom';
import useRefetch from '../../hooks/useRefetch';

export default function EditForm() {
  // TODO : 로직 분리하기
  const [refetchPosts] = useRefetch();
  const path = useLocation()?.state?.slice(1);
  const defaultValue = path ? path : 'music';
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState({
    title: '',
    category: defaultValue,
    content: '',
  });
  const [result, setResult] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setPost(prev => ({ ...prev, [name]: value }));
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const convertMusicNotes = () => {
    const contentArr = [...post.content.split('')];
    const isConversionNeeded = contentArr.filter(str => str === '~').length > 1;
    const [startIdx, endIdx] = [
      contentArr.indexOf('~'),
      contentArr.lastIndexOf('~'),
    ];
    const [frontArr, originalArr, backArr] = [
      contentArr.slice(0, startIdx),
      contentArr.slice(startIdx + 1, endIdx),
      contentArr.slice(endIdx + 1),
    ];
    const convertArr = isConversionNeeded
      ? originalArr.map(note => {
          switch (note) {
            case '도':
              return 1;
            case '레':
              return 2;
            case '미':
              return 3;
            case '파':
              return 4;
            case '솔':
              return 5;
            case '라':
              return 6;
            case '시':
              return 7;

            default:
              return note;
          }
        })
      : [];

    return [...frontArr, ...convertArr, ...backArr].join('');
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const content = convertMusicNotes();
    await writePost(user, { ...post, content });
    setResult(true);
    refetchPosts(`${post.category}`);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full mt-4'>
      {result && <p className='text-2xl font-semibold'>발행 완료</p>}
      <input
        onChange={handleChange}
        className='w-6/12 p-2 text-2xl mb-4 border-b-2 outline-none'
        type='text'
        name='title'
        required
        value={post.title}
        placeholder='제목을 입력하세요'
      />
      <div className='w-full border-2 border-b-0'>
        <select
          onChange={handleChange}
          defaultValue={defaultValue}
          className='border-r-2'
          name='category'
          id='category'
        >
          <option value='music'>악보</option>
          <option value='knowhow'>노하우</option>
        </select>
      </div>
      <textarea
        onChange={handleChange}
        className='w-full h-[50vh] p-2 mb-4 border-2 appearance-none resize-none outline-none'
        name='content'
        value={post.content}
        required
        placeholder='내용을 입력하세요'
      />
      <div className='w-full text-center'>
        <button
          onClick={handleGoBack}
          className='inline-flex items-center justify-center w-24 py-2 mr-2 text-white bg-red-500'
          type='button'
        >
          취소
        </button>
        <button
          className='inline-flex items-center justify-center w-24 py-2 text-white bg-blue-500'
          type='submit'
        >
          등록
        </button>
      </div>
    </form>
  );
}
