/* This script generates mock data for local development 
   using that site: https://json-schema-faker.js.org.

   This way you don't have to point to an actual API,
   but you can enjoy realistic, but randomized data,
   and rapid page loads due to local, static data.
 */

const schema = {
  type: "object",
  properties: {
    people: {
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
    animals: {
      type: "array",
      minItems: 5,
      maxItems: 5,
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            autoIncrement: true,
          },
          identification: {
            type: "string",
            faker: "name.firstName",
          },
          specie: {
            type: "string",
            faker: "random.word",
          },
        },
        required: ["id", "identification", "specie"],
      },
    },
    addresses: {
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
          city: {
            type: "string",
            faker: "address.city",
          },
          county: {
            type: "string",
            faker: "address.county",
          },
          state: {
            type: "string",
            faker: "address.state",
          },
          zipCode: {
            type: "number",
            faker: "address.zipCode",
          },
        },
        required: ["id", "city", "county", "state", "zipCode"],
      },
    },
    products: {
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
          imageUrl: {
            type: "string",
            faker: "image.image",
          },
          name: {
            type: "string",
            faker: "commerce.productName",
          },
          department: {
            type: "string",
            faker: "commerce.department",
          },
          price: {
            type: "string",
            faker: "commerce.price",
          },
          comment: {
            type: "string",
            faker: "lorem.sentence",
          },
        },
        required: ["id", "name", "imageUrl", "department", "price", "comment"],
      },
    },
  },
  required: ["people", "animals", "addresses", "products"],
};

var jsf = require("json-schema-faker");

jsf.extend("faker", () => {
  const faker = require("faker/locale/pt_BR");
  return faker;
});

var data = jsf.generate(schema);

module.exports = data;
