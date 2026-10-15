import express from "express";
const app = express();
const PORT = process.env.PORT || 5000;

const users = [
  { id: 1, name: "Hridoy", email: "hridoy@gmail.com" },
  { id: 2, name: "Rafi", email: "rafi@gmail.com" },
  { id: 3, name: "Hridoy Ahmed", email: "hridoyahmed@gmail.com" },
  { id: 4, name: "Ahmed", email: "ahmed@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User Management System");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
