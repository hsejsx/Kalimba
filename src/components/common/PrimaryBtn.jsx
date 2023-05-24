export default function PrimaryBtn({ text, onClick }) {
  return (
    <button
      className='py-2 px-4 text-white bg-primary hover:brightness-75 rounded-md'
      type='button'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
