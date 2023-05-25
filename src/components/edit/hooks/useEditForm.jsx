import { useLocation, useNavigate } from 'react-router-dom';
import useRefetch from '../../../hooks/useRefetch';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { writePost } from '../../../api/firebase';

export default function useEditForm() {
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
  return {
    handleChange,
    handleSubmit,
    post,
    defaultValue,
    handleGoBack,
    result,
  };
}
