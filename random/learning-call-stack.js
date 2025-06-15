// call stack with vscode debugger

const brushingTeeth = () => {
  console.log("Brushing teeth...");
};

const readingBook = () => {
  const booksInShelf = [
    "Harry Potter",
    "1984 by George Orwell",
    "Robinson Crusoe",
  ];
  const bookSelected =
    booksInShelf[Math.floor(Math.random() * booksInShelf.length)];

  return bookSelected;
};

const eatBreakFast = () => {
  console.log("Eating breakfast...");
};

const wakeUp = () => {
  console.log("Waked...");
  brushingTeeth();
  const bookSelected = readingBook();
  console.log("Reading book...:", bookSelected);
  eatBreakFast();
};

wakeUp();
