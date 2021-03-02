const jsonServer = require("json-server");
const { ValidationError } = require("express-json-validator-middleware");
const data = require("./data");
const personMiddleware = require("./middleware/person");

const PORT = process.env.PORT || 3000;

const server = jsonServer.create();
const router = jsonServer.router(data);
const defaultsMiddleware = jsonServer.defaults();

// Set defaults middleware (logger, static, cors and no-cache)
server.use(defaultsMiddleware);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
server.post("/api/persons", personMiddleware);

server.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    // At this point you can execute your error handling code
    res.status(400).send(err);
    next();
  } else next(err); // pass error on if not a validation error
});

server.use("/api", router);
// Use default router
server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
