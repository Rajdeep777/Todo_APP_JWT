# todo-server-jwt

> Simple server app with JWT authentication that uses MongoDB, Node.js, and the Express web framework to provide a todo API.
Returns JSON data using standard REST requests. Can be used to support MEAN/MERN/MEVN full-stack apps.

This is just the server-side - no client-side GUI is included.

## Links

- [Server Demo](https://todo-app-jwt.onrender.com)
- [Server Source](https://github.com/Rajdeep777/Todo-APP-JWT)

## Requirements

- A browser (e.g., Firefox or Chrome)
- A text editor (e.g., VS Code or Notepad++, or Chrome)
- Windows Powershell to run commands
- Node.js
- Atlas MongoDB hosting account (free)
- Heroku web app hosting account (free)

## Adding JWT Authentication to [todo-server](https://github.com/Rajdeep777/Todo-APP-JWT)

- package.json: add bcryptjs, jsonwebtoken
- app.json: add new routes (/auth, /user)
- config: add jwtSecret entry
- models: add user.js
- routes: add auth.js, user.js
- routes: set access for existing API to private (include auth as second param)

## Optional Windows - installing & upgrading programs

- Install [Chocolatey](https://chocolatey.org/) windows package manager

```Powershell
choco install nodejs postman -y
choco upgrade all -y
```

## Data hosted with Atlas (free tier)

- [Atlas](https://www.mongodb.com/cloud/atlas)
- In Atlas, create new context (e.g., todo-server-data)
- Get connection string
- config: copy example to default.json and add password
- config/default.json: listed in .gitignore to keep password secure

## Run locally against your Atlas MongoDB

- Fork the repo
- Clone your repo down to your local machine
- Create config/default.json
- Install dependencies with `npm install`
- Run the server locally with `npm run dev`

## View local app in browser

- <http://localhost:5002>
- <http://localhost:5002/todo>

## Demo site hosted with Render web hosting service (free tier)

- [Render](https://www.render.com/)
- Create free account
- New / Create new app / enter a name / create app.
- Under app Settings, create environment variable MONGODB_URI and set to Atlas Connection string (private and secure).
- Under app Settings, create environment variable JWT_SECRET and set to same value as in config/default.json.
- Under app Deploy / Deployment mthod / select GitHub master branch to deploy when there's a new commit pushed to master.

## View Heroku app in browser

Optional: update the following URIs to point to your Heroku app:

- <https://todo-app-jwt.onrender.com/>
- <https://todo-app-jwt.onrender.com/todo>

## Test requests with Postman

- Install [Postman](https://www.getpostman.com/)
- Additional details in following sections

Collection: "todo-server-jwt (local)"

- Set VERB + URI (and configure request if sending POST data)
- GET <http://localhost:5002/todo> - Send
- POST <http://localhost:5002/user> - set  Body / Raw / JSON & get back token
- POST <http://localhost:5002/todo> - set Auth / Bearer Token & Body / Raw / JSON / set "name" - Send
- DELETE <http://localhost:5002/todo/id> - set Auth / Bearer Token & copy id from post call and replace id - Send

Collection: "todo-server-jwt (heroku)"

- GET <https://todo-server-jwt-heroku-app.herokuapp.com/todo>
- POST <https://todo-server-jwt-heroku-app.herokuapp.com/user> - set  Body / Raw / JSON & get back token
- POST <https://todo-server-jwt-heroku-app.herokuapp.com/todo> - set Auth / Bearer Token & set Body / Raw / JSON - Send
- DELETE <https://todo-server-jwt-heroku-app.herokuapp.com/todo/id> - set Auth / Bearer Token copy id from post call and replace id - Send

## Create user with Postman (provides token)

1. POST <http://localhost:5002/user> - set Body / Raw / JSON - Send

```JSON
{
  "name" : "Rajdeep",
  "email" : "rajdeep@gmail.com",
  "password" : "rajdeep@123"
}
```

Should return something like:

```JSON
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2EzNWU4YmNiNzExMGM3NGQxZmMyZiIsImlhdCI6MTY4NTczMDc5MywiZXhwIjoxNjg1NzM0MzkzfQ.Ug0Oqa7bbWLmpd4e_c8Du536MJm-C_u32eZrFkz7T9g",
  "user": {
      "id": "647a35e8bcb7110c74d1fc2f",
      "name": "Rajdeep",
      "email": "rajdeep@gmail.com"
    }
}
```

1. POST <http://localhost:5002/auth> - set Body / Raw / JSON - Send

```JSON
{
  "name" : "Rajdeep",
  "email" : "rajdeep@gmail.com",
  "password" : "rajdeep@123"
}
```

Should return something like:

```JSON
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2EzNWU4YmNiNzExMGM3NGQxZmMyZiIsImlhdCI6MTY4NTczMDc5MywiZXhwIjoxNjg1NzM0MzkzfQ.Ug0Oqa7bbWLmpd4e_c8Du536MJm-C_u32eZrFkz7T9g",
  "user": {
      "id": "647a35e8bcb7110c74d1fc2f",
      "name": "Rajdeep",
      "email": "rajdeep@gmail.com"
    }
}

