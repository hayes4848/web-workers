const sort = (bigArray) => {
  return bigArray.sort((a, b) => a - b );
};

onmessage = (event) => {
  const sorted = sort(event.data);

  postMessage(sorted);

  close();
}