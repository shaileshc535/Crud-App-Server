const category = [
  {
    count: 1,
    success: true,
    message: "success",
    data: {
      _id: "63d36c2412e3eaf5ace9a980",
      name: "test category 2",
      code: "MSCAT-002",
      image: "http://localhost:8080/public/image-1674800978908.png",
      status: true,
      isdeleted: false,
      createdAt: "2023-01-27T06:16:04.182Z",
      updatedAt: "2023-01-27T06:29:38.915Z",
    },
  },
];

const getCategoryList = {
  tags: ["Category"],
  summary: "Get All Categories",
  description: "Get Categories List",
  responses: {
    200: {
      description: "Success",
      content: {
        schema: {
          type: "object",
          example: category,
        },
      },
    },
    400: {
      description: "Bad Request",
      content: {
        schema: {
          type: "object",
          example:{
            status: 400,
            success: false,
            message: "error occurred",
          }
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        schema: {
          type: "object",
          example:{
            status: 500,
            success: false,
            message: "server error occurred",
          }
        },
      },
    },
  },
};

const getCategoryInfo = {
  tags: ["Category"],
  summary: "Category Info",
  description: "Category By Category Id",
  parameters: [
    {
      name: "id",
      in: "path",
      description: "Category Id",
      type: "string",
      example: "63d3a08acb4d1eaf0022ae69",
    },
  ],
  responses: {
    200: {
      description: "Success",
      content: {
        schema: {
          type: "object",
          example: category,
        },
      },
    },
    400: {
      description: "Bad Request",
      content: {
        schema: {
          type: "object",
          example:{
            status: 400,
            success: false,
            message: "error occurred",
          }
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        schema: {
          type: "object",
          example:{
            status: 500,
            success: false,
            message: "server error occurred",
          }
        },
      },
    },
  },
};

const createCategory = {
  tags: ["Category"],
  summary: "Create New Category",
  description: "Create New Category",
  consumes: "multipart/form-data",
  requestBody: {
    content: {
      "multipart/form-data": {
        schema: {
          type: "object",
          required: ["name", "code"],
          properties: {
            name: {
              type: "string",
              description: "Category name",
              example: "category name",
            },
            code: {
              type: "string",
              description: "Category code",
              example: "category code",
            },
            image: {
              type: "file",
              description: "Category Image",
              example: "category image",
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
          example: category,
        },
      },
    },
    400: {
      description: "Bad Request",
      content: {
        schema: {
          type: "object",
          example:{
            status: 400,
            success: false,
            message: "error occurred",
          }
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        schema: {
          type: "object",
          example:{
            status: 500,
            success: false,
            message: "server error occurred",
          }
        },
      },
    },
  },
};

const updateCategory = {
  tags: ["Category"],
  summary: "Update Category",
  description: "Update Category Details",
  consumes: "multipart/form-data",
  requestBody: {
    content: {
      "multipart/form-data": {
        schema: {
          type: "object",
          required: ["id", "name", "code"],
          properties: {
            id: {
              type: "string",
              description: "Category Id",
              example: "category id",
            },
            name: {
              type: "string",
              description: "Category name",
              example: "category name",
            },
            code: {
              type: "string",
              description: "Category code",
              example: "category code",
            },
            image: {
              type: "file",
              description: "Category Image",
              example: "category image",
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
          example: category,
        },
      },
    },
    400: {
      description: "Bad Request",
      content: {
        schema: {
          type: "object",
          example:{
            status: 400,
            success: false,
            message: "error occurred",
          }
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        schema: {
          type: "object",
          example:{
            status: 500,
            success: false,
            message: "server error occurred",
          }
        },
      },
    },
  },
};

const deleteCategory = {
  tags: ["Category"],
  summary: "Delete Category",
  description: "Delete Category",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          required: ["id"],
          properties: {
            id: {
              name: "id",
              type: "string",
              description: "Category Id",
              example: "63d3a08acb4d1eaf0022ae69",
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
            data: "",
          },
        },
      },
    },
    400: {
      description: "Bad Request",
      content: {
        schema: {
          type: "object",
          example:{
            status: 400,
            success: false,
            message: "error occurred",
          }
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        schema: {
          type: "object",
          example:{
            status: 500,
            success: false,
            message: "server error occurred",
          }
        },
      },
    },
  },
};

const changeCategoryStatus = {
  tags: ["Category"],
  summary: "Update Category Status",
  description: "Update Category Status",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          required: ["id"],
          properties: {
            id: {
              name: "id",
              type: "string",
              description: "Category Id",
              example: "63d3a08acb4d1eaf0022ae69",
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
          example: category,
        },
      },
    },
    400: {
      description: "Bad Request",
    },
    500: {
      description: "Internal Server Error",
    },
  },
};

const CategorySwaggerDocs = {
  "/category/": {
    get: getCategoryList,
    post: createCategory,
    put: updateCategory,
  },

  "/category/{id}/": {
    get: getCategoryInfo,
  },

  "/category/delete/": {
    put: deleteCategory,
  },

  "/category/change-status/": {
    put: changeCategoryStatus,
  },
};

module.exports = CategorySwaggerDocs;
