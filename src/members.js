const members = [];

// Use the Webpack context module API (https://webpack.js.org/guides/dependency-management/#context-module-api)
// to import all json files in the members directory (except for _template.json)
// and put their contents into the members array.
function importAll(memberRequirer) {
  const filenames = memberRequirer.keys();
  filenames.forEach((filename) => {
    const data = memberRequirer(filename);
    if (typeof data !== "object") {
      throw new Error(
        `The file ${filename} must export a JSON object. Instead we got a JSON ${typeof data}.`,
      );
    }
    if (data === null) {
      throw new Error(
        `The file ${filename} must export a JSON object. Instead we got null.`,
      );
    }
    members.push({
      // the json data in the file
      ...data,
      // also add an extra field for the filename (for debugging)
      filename: filename.substring(2),
    });
  });
}
// import all json files in the members directory (except for _template.json)
importAll(require.context("./members", true, /^[^_].*\.json$/));

export default members;
