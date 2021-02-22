const appendData = (name, text) => {
  const fs = require("fs");
  return fs.writeFileSync(name, text);
};

module.exports = { appendData };
