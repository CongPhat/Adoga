// const express = require("express");
// const Joi = require("joi");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const cors = require("cors");
// const app = express();
// const { graphqlHTTP } = require("express-graphql");
// const controllerAuth = require("./controller/auth");
// // const { GraphQLServer, PubSub } = require("graphql-yoga");
// const { ApolloServer, gql } = require("apollo-server-express");
// const { createServer } = require("http");
// const { execute, subscribe } = require("graphql");
// const { PubSub } = require("graphql-subscriptions");
// const { SubscriptionServer } = require("subscriptions-transport-ws");

// const mongoUrl =
//   "mongodb+srv://congphat:Congphat2510@cluster0.nkvob.mongodb.net/adoga?retryWrites=true&w=majority";

// require("dotenv/config");
// app.use(
//   cors({
//     origin: ["http://localhost:2510"],
//   })
// );
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// // app.set("socketio", io);

const ProductRouter = require("./routes/products");
const LocationRouter = require("./routes/location");
const RoomRouter = require("./routes/room");
// const UserRouter = require("./routes/users");
// const CommentRouter = require("./routes/comments");
// const MessageRouter = require("./routes/message");

// app.get("/", (req, res) => {
//   res.send("Let's goooooo thooii");
// });
// // app.use("/post", PostRouter);
// // app.use("/user", UserRouter);
// // app.use("/comment", CommentRouter);
// // app.use("/message", MessageRouter);
// app.use("/img", express.static("public/images"));

// const server = createServer(app);
// server.listen(4000);

// Call in installed dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

// set up express app
const app = express();
app.use(
  cors({
    origin: ["http://localhost:2510"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// set up port number
// set up port
const port = 5035;

app.use("/product", ProductRouter);
app.use("/location", LocationRouter);
app.use("/room", RoomRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Project with Nodejs Express and MongoDB",
  });
});
app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});

const db =
  "mongodb+srv://congphat1:ieGgxkxYXQkf59TP@cluster0.nkvob.mongodb.net/adoga?retryWrites=true&w=majority";

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.log(error);
  });

// const connectWithRetry = function () {
//   // when using with docker, at the time we up containers. Mongodb take few seconds to starting, during that time NodeJS server will try to connect MongoDB until success.
//   return mongoose.connect(
//     mongoUrl,
//     { useNewUrlParser: true, useFindAndModify: false },
//     (err) => {
//       if (err) {
//         console.error(
//           "Failed to connect to mongo on startup - retrying in 5 sec",
//           err
//         );
//         setTimeout(connectWithRetry, 5000);
//       } else {
//         console.log("Connect");
//       }
//     }
//   );
// };
// connectWithRetry();
