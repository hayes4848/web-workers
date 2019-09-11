const sort = (bigArray) => {
  console.log('sorting!')
  return bigArray.sort((a, b) => a - b );
};

onmessage = ({data}) => {
  console.log(data);
  const sorted = sort(data);

  postMessage(sorted);

  close();
}