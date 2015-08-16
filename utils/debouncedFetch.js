/* this function just returns a function you can use to queue items
   the queueing returns a Promise you can return from GraphQL resolve()

    let myDebouncedFetch = debouncedFetch((queue) => {
      // do something with the queue which
      // is an array of 3-tuples: [item, resolveFn, rejectFn]
      // for example, merge the items into single rest call
    })

    myDebouncedFetch(item1).then(console.log)
    myDebouncedFetch(item2).then(console.log)
*/
export default function(handlerFn) {
  let queue = []

  function processQueue() {
    let toProcess = queue.splice(0, queue.length)
    if (toProcess.length > 0) {
      handlerFn(toProcess)
    }
  }

  return function(item) {
    return new Promise((resolve, reject) => {
      if (queue.length === 0) {
        process.nextTick(processQueue)
      }

      queue.push([item, resolve, reject])
    })
  }
}
