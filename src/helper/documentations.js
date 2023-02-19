const CategorySwaggerDocs = require("./swaggerRoutes/categorySwaggerRoutes");
const UserSwaggerDocs = require("./swaggerRoutes/userSwaggerRoutes");
const ContactSwaggerDocs = require("./swaggerRoutes/contactSwaggerRoutes");

const swaggerDocumentation = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Swagger API Documentation",
  },
  servers: [
    {
      url: "http://localhost:8080/",
      description: "Local Development Server",
    },
    {
      url: "http://production/",
      description: "Production Server",
    },
  ],
  liscence: {
    name: "Apache 2.0",
    url: "http://www.apache.org/liscences/LIS",
  },
  tags: [
    {
      name: "Contact",
      description: "Category Routes",
    },
    {
      name: "Category",
      description: "Category Routes",
    },
    {
      name: "User",
      description: "User Routes",
    },
  ],
  paths: {
    ...CategorySwaggerDocs,
    ...UserSwaggerDocs,
    ...ContactSwaggerDocs,
  },
};

module.exports = swaggerDocumentation;
