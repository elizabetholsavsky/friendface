<div align="center">
  
  <a><img src="https://github.com/elizabetholsavsky/social-network-API/assets/116515976/5ec6e548-9903-4292-a20c-0247ea2e6756" width="300" height="auto"></a>

  ### Social Network API
  
  <a href="">[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)</a>
  <a href="">[![Node.js Badge](https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat)](https://nodejs.org/en)</a>
  <a href="">[![MongoDB Badge](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=flat)](https://www.mongodb.com/)</a>
  <a href="">[![Mongoose Badge](https://img.shields.io/badge/Mongoose-800?logo=mongoose&logoColor=fff&style=flat)](https://mongoosejs.com/)</a>
  <a href="">[![Express Badge](https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat)](https://expressjs.com/)</a>
  <a href="">[![Nodemon Badge](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=fff&style=flat)](https://nodemon.io/)</a>
  <a href="">[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)</a>

</div>

## Description
Friendface is an API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list. The backend application uses Express.js for routing, a MongoDB database, and the Mongoose ODM. Additionally, [Moment.js](https://momentjs.com/) is used to format dates and [Faker-js](https://www.npmjs.com/package/@faker-js/faker) is used to seed mock users and thoughts in the database.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Contact](#contact)

## Installation
* Check if you have Node.js installed by typing `node -v` in your command line. If node is not installed, visit the [Node.js](https://nodejs.org/en) website to install. 
* Next, clone this project repository to your computer. 
* Use the command `npm i` to install dependencies. 
* Seed database with random mock data via [Faker-js](https://www.npmjs.com/package/@faker-js/faker) using command `npm run seed`.

## Usage
* Start server with command `npm start`.
* Alternatively, start server with Nodemon (and restart server automatically when making changes to code) with command `npm run dev`.
* Access API routes with Insomnia, Postman, or other REST API testing client.
 
Watch a [video](https://drive.google.com/file/d/1ovl1Py1NJAfmGoH2dBaoLTqZZ11tz2y3/view?usp=sharing) demonstrating get, post, push, and delete routes for User and Thought models:

https://github.com/elizabetholsavsky/friendface/assets/116515976/b5c2d97d-3496-4eba-ac26-0613210bca5d

**GET AND DELETE ROUTES**                                                                                                     
| User            | URL                                  | Thought            | URL                                         |
|-----------------|--------------------------------------|--------------------|---------------------------------------------|
| Get All Users   | /api/users                           | Get All Thoughts   | /api/thoughts                               |
| Get Single User | /api/users/:userId                   | Get Single Thought | /api/users/:thoughtId                       |
| Delete User     | /api/users/:userId                   | Delete Thought     | /api/users/:thoughtId                       |
| Delete Friend   | /api/users/:userId/friends/:friendId | Delete Reaction    | /api/users/:thoughtId/reactions/:reactionId |

**POST AND PUSH ROUTES**        
|                      | URL                                                       | JSON                                                                            |
|----------------------|-----------------------------------------------------------|---------------------------------------------------------------------------------|
| Create User          | /api/users                           | ```{ "username": "example", "email": "example@email.com" }```                   |
| Update User          | /api/users/:userId                   | ```{ "username": "example", "email": "example@email.com" }```                   |
| Add Friend           | /api/users/:userId/friends/:friendId |                                                                                 |
| Create Thought       | /api/thoughts                        | ```{ "thoughtText": "Lorem Ipsum", "username": "example", "userId": "123" }```  |
| Update Thought       | /api/thoughts/:thoughtId             | ```{ "thoughtText": "Lorem Ipsum" }```                                          |
| Create Reaction      | /api/thoughts/:thoughtId/reactions   | ```{ "reactionBody": "Lorem!", "username": "example" }```                      |


## License

[MIT License](https://opensource.org/licenses/MIT)

## Contributing

This application was created as part of a UT Full Stack Coding Bootcamp challenge.

Tables created using [table-magic](https://github.com/stevecat/table-magic) by Steve GunTrip ([stevecat](https://github.com/stevecat)).

## Contact
* Email elizabetholsavsky@gmail.com
* LinkedIn [https://www.linkedin.com/in/elizabetholsavsky/](https://www.linkedin.com/in/elizabetholsavsky/)
* Portfolio [https://elizabetholsavsky.com/](https://elizabetholsavsky.com/)
* Hashnode Blog [https://blog.elizabetholsavsky.com/](https://blog.elizabetholsavsky.com/)
* Twitter [@elizavsky](https://twitter.com/home)


