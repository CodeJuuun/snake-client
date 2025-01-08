const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });


  conn.on("connect", () => {
    console.log("Successfully connected to game server");

    conn.write("Name: CDC");
    
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });


  // receives incoming msg and transmits to user
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // added error handling event to listen
  conn.on("error", (error) => {
    console.log("Connection error: ", error);
  });


  // added event to close connection server when no longer needed
  conn.on("end", () => {
    console.log("Connection to server has ended");
  });

  conn.setEncoding("utf8");
  

  return conn;
};

module.exports = connect;