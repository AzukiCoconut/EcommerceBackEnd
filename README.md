# EcommerceBackEnd
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

## Description
A back-end application for an ecommerce site.  The application makes use of sequelize with an express.js application.  The models extend Sequelize.Model and implement the tables upon initialization.  The application categorizes products into broad categories and the products also have a set of Tags that are assigned to help identify products more easily.  Associations between Category and Product are in a one to many, while Product and Tags exist in a many to many relationship.  Routes are based on how data is to be retrived through each model.  Currently this application makes use of RESTful CRUD operations to make calls to the database and return formatted data.   


## Usage
A walkthrough video has been created to show the functionality of the application.  

The video can be found here:  https://drive.google.com/file/d/1qMhvFUa0DcT1I6P0y8J80jBHflVFmvDB/view

## Credits
The code was largely provided to me before taking on this project by the UNB Coding Bootcamp.  I needed to created the Model js files for each of the db tables as well as creating the associations between them.  I was also tasked with creating the CRUD operations in the route files.  

I acknowledge that much of the code was developed with the help of my exercise files from Week 13.  

I converted the create Product and Update Product operations to an async/await format with a try/catch block.  

## License

MIT License

Copyright (c) 2023 Matthew Tingley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
