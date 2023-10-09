const { directoryToTree } = require("./directoryToTree.js");
(async () => {
  console.clear();
  const dir = process.argv[2] ? process.argv[2] : "dummy_folder";
  const deep = process.argv[3] ? process.argv[3] : 4;
  const response = await directoryToTree(dir, deep);
  console.log(JSON.stringify(response));
})();
