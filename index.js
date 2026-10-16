import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

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

app.post("/users", (req, res) => {
  console.log("data from client", req.body);
  //   temporary storage
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send({ success: true, message: "user added successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
