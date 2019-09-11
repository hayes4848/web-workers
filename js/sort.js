const sort = (bigArray) => {
  console.log('sorting!')
  return bigArray.sort((a, b) => a - b );
};

onmessage = (event) => {
  console.log(event.data);
  const sorted = sort(event.data);

  postMessage(sorted);

  close();
}