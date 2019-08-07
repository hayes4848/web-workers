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