const sort = (bigArray) => {
  console.log('sorting!')
  return bigArray.sort((a, b) => a - b );
};

onmessage = ({chunk}) => {
  console.log('chunk: ', chunk);
  const sorted = sort(chunk);

  postMessage(sorted);

  close();
}