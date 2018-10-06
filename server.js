"use strict";

const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); //пакет, разрешающий делать запросы с других адресов

const todos = require("./api/todos");

const app = express();

let nextId = 5;

app.set("port", process.env.PORT || 5000);

app.use(cors()); //кажыдй запрос проходит через cors и
// добавляет headers о том, что может принимать запросы с других адресов
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.get("/api/todos", (req, res) => {
  res.send(todos);
});

app.post("/api/todos", (req, res) => {
  const todo = {
    id: nextId++,
    title: req.body.title,
    completed: false
  };

  todos.push(todo);

  res.send(todo);
});

app.put("/api/todos/:id", (req, res) => {
  const todo = todos.find(todo => todo.id == req.params.id);

  if (!todo) return res.sendStatus(404);

  todo.title = req.body.title || todo.title;

  res.json(todo);
});

app.patch("/api/todos/:id", (req, res) => {
  const todo = todos.find(todo => todo.id == req.params.id);

  if (!todo) return res.sendStatus(404);

  todo.completed = !todo.completed;

  res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const index = todos.findIndex(todo => todo.id == req.params.id);

  if (index === -1) return res.sendStatus(404);

  todos.splice(index, 1);

  res.sendStatus(204);
});

app.listen(app.get("port"), () =>
  console.log(`Server is listening: http://localhost:${app.get("port")}`)
);
