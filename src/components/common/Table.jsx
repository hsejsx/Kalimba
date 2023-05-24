export default function Table({ posts }) {
  return (
    <table className='w-full table border-b-2'>
      <thead className='border-b-2'>
        <tr>
          <th>카테고리</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>추천</th>
        </tr>
      </thead>
      <tbody>
        {!posts && (
          <tr>
            <td colSpan='5' className='py-2 text-center'>
              작성된 게시글이 없습니다.
              <br />첫 글을 작성해 보세요!
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
