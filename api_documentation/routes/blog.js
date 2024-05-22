const express = require('express');

//const app = express();

const router = express.Router();

/**
 * @swagger
 * /blog:
 *  get:
 *      summary: Returns a list of all blog publications
 *      description: Returns a comprehensive list of all blog post
 *      responses:
 *          200:
 *              description: Successful
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: string
 *                          example: "blog 1, blog 2"
 *          400:
 *              description: failed
 */

router.get("/blog", (req, res) => {
    // read all blog publication
    res.send("list all publications");
});

/**
 * @swagger
 * /blog:
 *  post:
 *      summary: Create a new blog posts
 *      description: Create new blog post
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          title:
 *                              type: string
 *                          author:
 *                              type: string
 *                          date:
 *                              type: string
 *    
 *      responses:
 *          200:
 *              description: Successful
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              title:
 *                                  type: string
 *                              author:
 *                                  type: string
 *
 *          400:
 *              description: Error creating post
 */

router.post("/blog", (req, res) => {
    //create blog pub    
    const { title, author, date } = req.body

    res.status(201).json({
        title: "title",
        author: "author",
        date: "date"
    });
});