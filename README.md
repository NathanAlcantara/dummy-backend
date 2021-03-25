Dummy api repository for testing/learning frontend using json-server and json-schema-faker for generate dummy data.

## Entities

There are four entities:

- person: 
  ```json
  {
    "id": "number",
    "name": "string",
    "age": "number",
    "email": "string",
    "phone": "string",
    "addressesId": ["number"],
    "animalsId": ["number"],
    "productsId": ["number"]
  }
  ```
- animal:
  ```json
  {
    "id": "number",
    "identification": "string",
    "specie": "string"
  }
  ```
- address:
  ```json
  {
    "id": "number",
    "city": "string",
    "county": "string",
    "state": "string",
    "zipCode": "number"
  }
  ```
- product:
  ```json
  {
    "id": "number",
    "imageUrl": "string",
    "name": "string",
    "department": "string",
    "price": "string",
    "comment": "string"
  }
  ```

## Endpoints
Each entity has endpoints using their plural because HTTP GET return a list:
- /api/people
- /api/animals
- /api/addresses
- /api/products

## Middleware
On POST, PUT and PATCH of people and addresses has a middleware to validade the body

Validations:
- people:
  - name: should be string
  - age: should be integer > 18 and < 80
  - email: should be string
  - phone: should be string
  - addressesId: should be array of number
  - animalsId: should be array of number
  - productsId: should be array of number
  
- address:
  - city: should be string
  - county: should be string
  - state: should be string
  - zipCode: should be number

- products: you cannot submit a new product

## Custom Properties

You can create any properties that you want, but it will be only a temp property, because the data is not persistent.