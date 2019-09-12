onmessage = (e) => {
  let array = Array(5000000)
    .fill()
    .map(() => Math.random());
postMessage(array);    
}

