const User = [
  {
    success: true,
    message: "success",
    data: {
      _id: "63d121f9559a43a1d0194f92",
      firstname: "test",
      lastname: "test",
      email: "test@gmail.com",
      phone: "9876543210",
      password: "$2a$12$uR3EknpS.oXP3N5.sdbb8e9e6jmVtERI1l9JQBQD6feKSKg4IUXy6",
      image:
        "//www.gravatar.com/avatar/098f6bcd4621d373cade4e832627b4f6?s=200&r=pg&d=mm",
      role: "user",
      gender: "male",
      status: true,
      isdeleted: false,
      isblocked: false,
    },
  },
];

const getUserList = {
  tags: ["User"],
  summary: "Get All User",
  description: "Get User List",
  responses: {
    200: {
      description: "Success",
      content: {
        schema: {
          type: "object",
          example: User,
        },
      },
    },
    400: {
      description: "Bad Request",
      content: {
        schema: {
          type: "object",
          example: {
            status: 400,
            success: false,
            message: "error occurred",
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        schema: {
          type: "object",
          example: {
            status: 500,
            success: false,
            message: "server error occurred",
          },
        },
      },
    },
  },
};

const getUserInfo = {
  tags: ["User"],
  summary: "User Info",
  description: "User By User Id",
  parameters: [
    {
      name: "id",
      in: "path",
      description: "User Id",
      type: "string",
      example: "63d121f9559a43a1d0194f92",
    },
  ],
  responses: {
    200: {
      description: "Success",
      content: {
        schema: {
          type: "object",
          example: User,
        },
      },
    },
    400: {
      description: "Bad Request",
      content: {
        schema: {
          type: "object",
          example: {
            status: 400,
            success: false,
            message: "error occurred",
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        schema: {
          type: "object",
          example: {
            status: 500,
            success: false,
            message: "server error occurred",
          },
        },
      },
    },
  },
};

const userLogin = {
  tags: ["User"],
  summary: "User Login",
  description: "User Login",
  consumes: ["html/text", "application/json", "application/xml"],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              name: "email",
              type: "string",
              description: "User Email",
              example: "test@gmail.com",
            },
            password: {
              name: "password",
              type: "string",
              description: "User Password",
              example: "test123",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "Success",
      content: {
        schema: {
          type: "object",
          example: {
            success: true,
            message: "success",
            data: {
              status: 200,
              success: true,
              message: "success",
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDEyMWY5NTU5YTQzYTFkMDE5NGY5MiIsImZpcnN0bmFtZSI6InRlc3QiLCJsYXN0bmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwicGhvbmUiOiI5ODc2NTQzMjEwIiwiaW1hZ2UiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzA5OGY2YmNkNDYyMWQzNzNjYWRlNGU4MzI2MjdiNGY2P3M9MjAwJnI9cGcmZD1tbSIsInJvbGUiOiJ1c2VyIiwiZ2VuZGVyIjoibWFsZSIsImlhdCI6MTY3NDgxNjQ2MCwiZXhwIjoxNjc0OTAyODYwfQ.y4qHg395VpKQ9mvYWJFAcCKNwKngncX1qGaoEgXjyW8",
              data: {},
            },
          },
        },
      },
    },
    400: {
      description: "Bad Request",
      content: {
        schema: {
          type: "object",
          example: {
            status: 400,
            success: false,
            message: "error occurred",
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        schema: {
          type: "object",
          example: {
            status: 500,
            success: false,
            message: "server error occurred",
          },
        },
      },
    },
  },
};

const userRegister = {
  tags: ["User"],
  summary: "Register New User",
  description: "Register New User",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          required: ["id"],
          properties: {
            firstname: {
              name: "firstname",
              type: "string",
              description: "User firstname",
              example: "test",
            },
            lastname: {
              name: "lasttname",
              type: "string",
              description: "User lasttname",
              example: "test",
            },
            email: {
              name: "email",
              type: "string",
              description: "User email",
              example: "test@gmail.com",
            },
            phone: {
              name: "phone",
              type: "string",
              description: "User phone",
              example: "8888888888",
            },
            role: {
              name: "role",
              type: "string",
              description: "User role",
              example: "user",
            },
            gender: {
              name: "gender",
              type: "string",
              description: "User gender",
              example: "male",
            },
            password: {
              name: "password",
              type: "string",
              description: "User password",
              example: "******",
            },
            confirm_password: {
              name: "confirm_password",
              type: "string",
              description: "User confirm password",
              example: "******",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "Success",
      content: {
        schema: {
          type: "object",
          example: {
            success: true,
            message: "success",
            data: {
              status: 200,
              success: true,
              message: "success",
              token:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDEyMWY5NTU5YTQzYTFkMDE5NGY5MiIsImZpcnN0bmFtZSI6InRlc3QiLCJsYXN0bmFtZSI6InRlc3QiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwicGhvbmUiOiI5ODc2NTQzMjEwIiwiaW1hZ2UiOiIvL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLzA5OGY2YmNkNDYyMWQzNzNjYWRlNGU4MzI2MjdiNGY2P3M9MjAwJnI9cGcmZD1tbSIsInJvbGUiOiJ1c2VyIiwiZ2VuZGVyIjoibWFsZSIsImlhdCI6MTY3NDgxNjQ2MCwiZXhwIjoxNjc0OTAyODYwfQ.y4qHg395VpKQ9mvYWJFAcCKNwKngncX1qGaoEgXjyW8",
              data: {},
            },
          },
        },
      },
    },
    400: {
      description: "Bad Request",
      content: {
        schema: {
          type: "object",
          example: {
            status: 400,
            success: false,
            message: "error occurred",
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        schema: {
          type: "object",
          example: {
            status: 500,
            success: false,
            message: "server error occurred",
          },
        },
      },
    },
  },
};

const UserSwaggerDocs = {
  "/user/": {
    get: getUserList,
  },

  "/user/{id}/": {
    get: getUserInfo,
  },

  "/user/signin/": {
    post: userLogin,
  },

  "/user/signup/": {
    post: userRegister,
  },
};

module.exports = UserSwaggerDocs;
