waitAndPrint = (message, delay) => {
  setTimeout(() => {
    console.log(message);
  }, delay);
};

waitAndPrint("Hello, world!", 2000);
