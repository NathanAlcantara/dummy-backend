/* This script generates mock data for local development.
   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

const schema = {
  type: "object",
  properties: {
    persons: {
      type: "array",
      minItems: 100,
      maxItems: 100,
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            autoIncrement: true,
          },
          name: {
            type: "string",
            faker: "name.findName",
          },
          age: {
            type: "integer",
            minimum: 18,
            maximum: 80,
          },
          email: {
            type: "string",
            faker: "internet.email",
          },
          phone: {
            type: "string",
            faker: "phone.phoneNumber",
          },
        },
        required: ["id", "name", "age", "email", "phone"],
      },
    },
  },
  required: ["persons"],
};

var jsf = require("json-schema-faker");

jsf.extend("faker", () => {
  const faker = require("faker/locale/pt_BR");
  return faker;
});

var data = jsf.generate(schema);

module.exports = data;
