// console.log("This is a server");
// console.log("Good Morning");

const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Arjun", role: "student",skills:["java","python","mongo"] },
  { id: 2, name: "Priyesha", role: "mentor",skills:["java","python","mongo"] },
  { id: 3, name: "Nandini", role: "mentor",skills:["java","python","mongo"] },
  { id: 4, name: "Moksh", role: "student" ,skills:["java","python","mongo"]},
  { id: 5, name: "Mahi", role: "student",skills:["java","python","mongo"] },
];

app.get("/", (req, res) => {
  res.send("Dhruvi patel");
});
app.get("/route2", (req, res) => {
  res.send("Express server is running on route 2");
});
app.get("/users", (req, res) => {
  res.status(200).json(users);
});
app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});