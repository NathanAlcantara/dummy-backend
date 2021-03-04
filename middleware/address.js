const { Validator } = require("express-json-validator-middleware");
// Initialize a Validator instance first
const validator = new Validator({ allErrors: true }); // pass in options to the Ajv instance

// Define a shortcut function
const validate = validator.validate;

const schema = {
  type: "object",
  required: ["city", "county", "state", "zipCode"],
  properties: {
    city: {
      type: "string",
    },
    county: {
      type: "string",
    },
    state: {
      type: "string",
    },
    zipCode: {
      type: "number",
    },
  },
};

module.exports = validate({ body: schema });
