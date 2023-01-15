export const handleScrollBar = (
  movies: any,
  startIndex: number,
  endIndex: number
) => {
  return movies.slice(startIndex, endIndex);
};
