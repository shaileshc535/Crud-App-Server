const Contact = [
  {
    count: 1,
    success: true,
    message: "success",
    data: {},
  },
];

const getContactList = {
  tags: ["Contact"],
  summary: "Get All Contacts",
  description: "Get Contacts List",
  responses: {
    200: {
      description: "Success",
      content: {
        schema: {
          type: "object",
          example: Contact,
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

const getContactInfo = {
  tags: ["Contact"],
  summary: "Contact Info",
  description: "Contact By Contact Id",
  parameters: [
    {
      name: "id",
      in: "path",
      description: "Contact Id",
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
          example: Contact,
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

const createContact = {
  tags: ["Contact"],
  summary: "Create New Contact",
  description: "Create New Contact",
  consumes: ["html/text", "application/json", "application/xml"],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Contact name",
              example: "Contact name",
            },
            number: {
              type: "string",
              description: "Contact code",
              example: "Contact code",
            },
            address: {
              type: "string",
              description: "Address",
              example: "sector 04, Noida, Uttar Pradesh",
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
          example: Contact,
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

const updateContact = {
  tags: ["Contact"],
  summary: "Update Contact",
  description: "Update Contact Details",
  consumes: "multipart/form-data",
  requestBody: {
    content: {
      "multipart/form-data": {
        schema: {
          type: "object",
          properties: {
            id: {
              type: "string",
              description: "Contact Id",
              example: "Contact id",
            },
            name: {
              type: "string",
              description: "Contact name",
              example: "Contact name",
            },
            number: {
              type: "string",
              description: "Contact code",
              example: "Contact code",
            },
            address: {
              type: "string",
              description: "Address",
              example: "sector 04, Noida, Uttar Pradesh",
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
          example: Contact,
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

const deleteContact = {
  tags: ["Contact"],
  summary: "Delete Contact",
  description: "Delete Contact",
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
              description: "Contact Id",
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

const ContactSwaggerDocs = {
  "/contact/": {
    get: getContactList,
    post: createContact,
    put: updateContact,
  },

  "/contact/{id}/": {
    get: getContactInfo,
  },

  "/contact/delete/": {
    put: deleteContact,
  },
};

module.exports = ContactSwaggerDocs;
