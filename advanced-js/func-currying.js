console.log("Function Currying")

const stringAppender = (appender) => {
  return (value) => {
    return appender + " " + value
  }
}

const haiAppender = stringAppender("Hai")

console.log("haiAppender =", haiAppender("World"))

const helloAppender = stringAppender("Hello")
// OUTPUT: haiAppender = Hai World

console.log("helloAppender =", helloAppender("World"))
// OUTPUT: helloAppender = Hello World