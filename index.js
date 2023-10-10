const path = require("path");
const fs = require("fs").promises;
const directoryToTree = async (rootPath, maxDepth, debug = false) => {
  const recursor = async (tree, dir, dindex = 1) => {
    try {
      if (isNaN(maxDepth)) throw "Deep should be a number";
      const files = await fs.readdir(dir);
      const tmpDirName = dir.split("/");
      tree = {
        name: tmpDirName[tmpDirName.length - 1],
        path: dindex === 1 ? path.join(__dirname, dir) : dir,
        type: "dir",
        size: 0,
        children: [],
      };

      if (maxDepth <= 0) return tree;

      for (const file of files) {
        file_path = path.resolve(dir, file);
        const stat = await fs.stat(file_path);
        if (stat.isDirectory()) {
          if (dindex < maxDepth) {
            const newTree = await recursor({}, `${file_path}`, dindex + 1);
            tree.size = stat.size;
            tree.children.push(newTree);
          } else {
            tree.children.push({
              path: path.join(__dirname, file),
              name: file,
              type: "dir",
              size: stat.size,
            });
          }
        } else if (stat.isFile()) {
          tree.children.push({
            path: path.join(__dirname, file),
            name: file,
            type: "file",
            size: stat.size,
          });
        }
      }
      return tree;
    } catch (ex) {
      if (debug) console.error(ex);
      return {};
    }
  };
  return await recursor({}, rootPath);
};

module.exports = {
  directoryToTree,
};
