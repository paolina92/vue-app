const express = require("express");

const app = express();

app.use(express.static("dist"));
app.get("/api/getUser", (req, res) => res.send({ username: "Paolina" }));
app.get("/api/getTrackslist", (req, res) => res.send({ track: "sdfsdf" }));
app.listen(8080, () => console.log("Listening on port 8080!"));
