const { response } = require("express");
const express = require("express");
const { request } = require("http");

//impost ^^^^
const app = express();

//configuring Express instance

app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});

app
  .route("/")
  .get((request, response) => {
    response.send(
      JSON.stringify({ message: "No GET routes available on root URI" }),
      null,
      404
    );
  })
  .post((request, response) => {
    response.send(
      JSON.stringify({ message: "No GET routes available on root URI" }),
      null,
      404
    );
  });

app.route("/greet/:name").get((request, response) => {
  const name = request.params.name;
  response.status("418").json({ message: `Hello ${name}` });
});

//Executing the Express (This must be last)
app.listen(4040, () => console.log("Listening on port 4040"));
