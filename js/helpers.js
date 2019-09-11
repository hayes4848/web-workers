let worker;

const countUp = () => {
  let i = 0;

  while (i < 60000) {
    console.log("The number is " + i);
    i++;
  };
};

const withWorker = () => {
  worker = new Worker('js/worker.js');
  worker.onmessage = event => {
    console.log(event.data);
  };
};

const sortBigArray = (bigArray) => {
  console.time("start sort");
  bigArray.sort((a, b) => a - b );
  console.timeEnd("start sort");
}

const bigArrayWithWorker = async (bigArray) => {
  console.time('chunking');
  const numberOfWorkers = 4;
  let size = Math.ceil(bigArray.length / numberOfWorkers);
  console.log(size);
  let chunky = chunk(bigArray, size);
  console.log(chunky);

  //assign smaller chunks to a worker
  const promises = chunky.map( c => sortArrayWithWorker(c));
  const results =  await Promise.all(promises);
  results.reduce((acc, chunk) => acc.concat(chunk), []); 
  console.log(results.length)
  console.timeEnd('chunking');
}

const sortArrayWithWorker = async(chunk) => {
  return new Promise((resolve, reject) => {
    let worker = new Worker('js/sort.js');

    worker.onmessage = ({data}) => resolve(data);

    worker.postMessage(chunk);
  });
}

const chunk = (array, size) => {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}