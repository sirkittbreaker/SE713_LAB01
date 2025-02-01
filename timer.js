waitAndPrint = (message, delay) => {
  setInterval(() => {
    world = "world";
    console.log(message);
    message += world;
  }, delay);
};

waitAndPrint("hello world", 3000);
