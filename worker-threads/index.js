const { Worker } = require("worker_threads");

/**
 * The function "chunkify" takes an array and a number as input, and returns an array of subarrays
 * where each subarray contains approximately equal number of elements from the original array.
 * @param array - The `array` parameter is an array that you want to split into chunks.
 * @param n - The parameter `n` represents the number of chunks you want to divide the array into.
 * @returns an array of chunks, where each chunk is a subarray of the original array.
 */
function chunkify(array, n) {
  let chunks = [];
  for (let i = n; i > 0; i--) {
    chunks.push(array.splice(0, Math.ceil(array.length / i))); // [0-25], [25-50], [50-75], [75-100]
  }
  return chunks;
}

/* The code is creating an array called `jobs` with a length of 100. Each element in the array is
initialized with the value `1e9`, which is a shorthand notation for `1 * 10^9` or 1 billion. */
const jobs = Array.from({ length: 100 }, () => 1e9);

function run(jobs, concurrentWorkers) {
  const chunks = chunkify(jobs, concurrentWorkers);

  let completedWorkerThreads = 0;
  const tick = performance.now();

  chunks.forEach((data, i) => {
    const worker = new Worker("./worker.js");
    worker.postMessage(data);
    worker.on("message", () => {
      console.log(`Worker ${i} completed`);
      completedWorkerThreads++;
      if (completedWorkerThreads === concurrentWorkers) {
        const tock = performance.now();
        console.log(`${concurrentWorkers} took ${tock - tick} ms`);
        process.exit();
      }
    });
  });
}

run(jobs, 12);
