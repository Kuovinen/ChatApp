# ChatApp written using the MERN full stack.

The front end is javascript code using the ReactJS library,
The backend is nodejs using expressJs and mongoose,
The database is mongoDB

To install locally you need to clone this directory.

- Create an atlas accound and a database in it.
- Create a .env file in root with the following data:

---

`PORT = 5000`  
`URS=yourUserName`  
`PSW=yourAtlasPassword(not the user one, one you get for db access)`

`MONGO_DB_URL=yourMongoDburl`

`JWT_SECRET=your JWTsecretCode`  
`NODE_ENV="development"`

To run the app in root:
`npm run build`
`npm start`  
the open localhost:5000
