export default function useTimestamp() {
  function getDate(date) {
    const ladedTime = JSON.parse(date);
    const year = ladedTime.slice(0, 4);
    const month = ladedTime.slice(5, 7);
    const day = ladedTime.slice(8, 10);
    return `${year}-${month}-${day}`;
  }

  return [getDate];
}
