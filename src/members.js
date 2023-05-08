const members = [];

// Use the Webpack context module API (https://webpack.js.org/guides/dependency-management/#context-module-api)
// to import all json files in the members directory (except for _template.json)
// and put their contents into the members array.
function importAll(r) {
  r.keys().forEach((key) => members.push(r(key)));
}
importAll(require.context("./members", true, /^[^_].*\.json$/));

export default members;
