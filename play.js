const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.on("connect", () => {
    console.log("data received");
  });

  conn.setEncoding("utf8");
  
  return conn;
};

console.log("Connecting ...");
connect();