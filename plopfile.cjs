/**
 *
 * @param {import('plop').NodePlopAPI} plop
 */
module.exports = function (plop) {
  plop.setGenerator("migration", require("./resources/generators/migration"));
  plop.setHelper("timestamp", function (txt) {
    const now = new Date();

    // Format the date and time in ISO 8601 without the hyphens, colons, and milliseconds
    const timestamp = now
      .toISOString()
      .replace(/[-:.]/g, "")
      .split("T")
      .join("T")
      .split("Z")[0];

    return timestamp;
  });
};
