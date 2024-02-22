const members = [];

// Use the Vite `import.meta.glob` feature (https://vitejs.dev/guide/features.html#glob-import)
// to import all json files in the members directory (except for _template.json)
// and put their contents into the members array.
function importAll(importRes) {
  for (const [filename, module] of Object.entries(importRes)) {
    const data = module.default;
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
  }
}
// import all json files in the members directory (except for _template.json)
// importAll(require.context("./members", true, /\/[^_][^/]+\.json$/));
importAll(
  import.meta.glob(["./members/*.json", "!./members/_*"], { eager: true }),
);

export default members;
