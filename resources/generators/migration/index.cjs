/**
 *
 * @type {import('plop').PlopGenerator}
 */
module.exports = {
  description: "Migration filename",
  prompts: [
    {
      type: "input",
      name: "name",
    },
  ],
  actions: [
    {
      type: "add",
      path: "src/database/migrations/{{timestamp}}_{{name}}.ts",
      templateFile: "resources/generators/migration/index.ts.hbs",
    },
  ],
};
