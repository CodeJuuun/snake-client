const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
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


console.log("Connecting ...");
connect();