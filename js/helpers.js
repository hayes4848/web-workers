
const countUp = () => {
  let i = 0;
  while (i < 60000) {
    console.log("The number is " + i);
    i++;
  };
};

const withWorker = () => {
  // the worker.js file is downloaded asynchronosly, and as soon as it loads it begins to execute in a seperate thread. 
  let worker = new Worker('js/worker.js');
  // workers communicate with the main thread through 'messages' as seen here. 
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
  let chunky = chunk(bigArray, size);

  //assign smaller chunks to a worker
  const promises = chunky.map( c => sortArrayWithWorker(c));
  const results =  await Promise.all(promises);
  const fullResults = results.reduce((acc, chunk) => acc.concat(chunk), []); 
  console.log(fullResults.length)
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

const bigArray = () => {
  let worker = new Worker('js/five-million.js')

  worker.onmessage = ({data}) => {
    console.log("array length", data.length)
    return data;
  }
  worker.postMessage('');
};