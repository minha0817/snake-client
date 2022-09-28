const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (data) {
    if (data === "\u0003") {
      process.exit();
    }

    process.stdout.write(data);
  };

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput,
};
