## Stackoverflow clone with Node.js

**Run**

To run this project, download it to your computer and open it with a code editor. Open the `.env` file in the env folder and firstly give it into `MONGO_URL` information. MONGO_URL gets database connect link. Like that:

`MONGO_URL = mydatabaseconnectlinkexample@mongodb`

You should enter other information in the `.env` file for token and password reset operations. You can find this information at the end of this document under the name "env file". But it's not must for now.

Then you should download the packages that this project depends on from the terminal with the `npm install` command. Dependencies of this project:

    + bcryptjs: password encryption operations
    + dotenv: configuration of environment variables
    + express: development back end rest api
    + express-async-handler: error handling in async-await codes
    + jsonwebtoken: creating token
    + mongoose: database operations with mongodb
    + multer: uploading profile photo
    + nodemailer: sending mail
    + slugify: creating slug

And you can run now this project with that command:

`npm run start`

## Project Informations

### 1. stacks:

    + Back end: Node.js, Express.js
    + Database: MongoDB

### 2. file structure:

    + `server.js`: main file
    + `routes`: a folder that uses the express router feature and keeps the route information in it.
    + `controllers`: a folder that contains controller functions for routes.
    + `models`: a folder that contains user-question-answer models.
    + `middlewares`: a folder that contains middlewares that performs some checks for routes
    + `helpers`: a folder that contains helpers functions like database connection
    + `env`: environment variables
    + `package.json`: package.json
    + `package-lock.json`: package-lock.json

### 3. database models:

    + `user`: A user model exists in the database. User can sign up with own email and password. User has the "user" role by default. User can optionally add "title, about, place, website" fields. User can view their own profile and upload profile photo. If user forgot his password, he can reset his password. User can create and answer questions.

    + `question`: A question model exists in the database. User can create questions with the question model. User can edit the questions. User can delete questions. User can add answers to questions.

    + `answer`: A answer model exists in the database.

### 4. authentication - authorization

This project uses JSON Web Token for authentication and authorization. You will receive a token when you log in. When you want to reach certain routes, middleware decodes this token and if the token is valid, it allows you to switch to the route. If you want to test this project in an API Testing tool, you should send token information in headers in route requests. Like that:

`Bearer: {{access_token}}`

### 5. routes

    + `/api/auth/register`: register
    + `/api/auth/login: login
    + `api/questions/`: get all questions
    + `api/questions/:id`: get single question by id
    + `api/questions/ask: ask a question
    + `api/questions/:id/delete`: delete a question

### 6. env file

```
## Environment Variables

PORT = 3000
NODE_ENV=development

## Database Connect Link

MONGO_URL = // your database connect link

## Json Web Token

JWT_SECRET_KEY= // your secret key for json-web-token
JWT_EXPIRE= // jwt expire

# Cookie

JWT_COOKIE= // jwt cookie expire

# Reset Password

RESET_PASSWORD_EXPIRE= // reset password expire

# NodeMailer

SMTP_SERVER_HOST=smtp.gmail.com
SMTP_SERVER_PORT=587
SMTP_EMAIL= // your e-mail adress
SMTP_PASS= // your e-mail password

```
