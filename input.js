let connection;

const setupInput = function (connect) {
  connection = connect;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }

    if (key === "w") {
      connection.write("Move: up");
    }

    if (key === "a") {
      connection.write("Move: left");
    }

    if (key === "s") {
      connection.write("Move: down");
    }

    if (key === "d") {
      connection.write("Move: right");
    }

    if (key === "r") {
      connection.write("Say: tookme3hoursforthis");
    }

    if (key === "g") {
      connection.write("Say: oh yeahhhhh gg");
    }

    if (key === "k") {
      connection.write("Say: ALLDONEEEE");
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput,
};
