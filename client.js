const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    //conn object is an instance of the socket class.
    //node's net library - function
    host: "165.227.47.243", // for creating an object named conn.
    port: 50541,
  });
  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    console.log("Successfully connected");
  });

  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  return conn;
};

module.exports = {
  connect,
};
