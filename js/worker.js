let i = 0;

while (i < 60000) {
  console.log(" the number is ", i)
  i++;
};
postMessage("Web Worker finished counting");