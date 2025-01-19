let connection;

const { moveUp, moveLeft, moveDown, moveRight } = require("./constants");

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  
  const handleUserInput = function(key) {
    if (key === "\u0003") {
      process.exit();
    }

    // use switch statements since there are many if cases for easier readibility
    switch (key) {
    case moveUp:
      connection.write("Move: up");
      break;
    case moveLeft:
      connection.write("Move: left");
      break;
    case moveDown:
      connection.write("Move: down");
      break;
    case moveRight:
      connection.write("Move: right");
      break;
    }

    if (key === "1") {
      connection.write("Say: Watch out!");
    } else if (key === "2") {
      connection.write("Say: Good job!");
    }
  };

  stdin.on("data", handleUserInput);
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};


setupInput();


module.exports = setupInput;