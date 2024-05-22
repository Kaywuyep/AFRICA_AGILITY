const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const PORT = 3000;

//swagger config options
const options = {
    definition:{
        openapi: "3.0.0",
        info: {
            title: "Blog API",
            description: "CRUD API to manage all blog publications",
            version: "1.0.0",
        },
    },
    servers:[
        {
            url: "http://localhost:3000/"
        },
    ],
    apis: ["./routes/*.js"], // path to api routes folder
};

// swagger documentations or specs
const swaggerDocs = swaggerJsDoc(options);

// set up swagger user interface
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// routes 
//app.use("/blog", require("./routes/blog"));

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});