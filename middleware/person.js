const { Validator } = require("express-json-validator-middleware");
// Initialize a Validator instance first
const validator = new Validator({ allErrors: true }); // pass in options to the Ajv instance

// Define a shortcut function
const validate = validator.validate;

const schema = {
  type: "object",
  required: ["name", "age", "email", "phone"],
  properties: {
    name: {
      type: "string",
    },
    age: {
      type: "integer",
      minimum: 18,
      maximum: 80,
    },
    email: {
      type: "string",
    },
    phone: {
      type: "string",
    },
  },
};

module.exports = validate({ body: schema });
