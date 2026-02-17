import express from 'express';
import userRouter from './router/userRouter.js';

const app = express();

app.use('/api', userRouter);
export const createUser = (req, res) => {
    const { name, email } = req.body;
    let newUser = {id: userdata.length + 1, name, email};
    userdata.push(newUser);
}

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const userIndex = userdata.findIndex(user => user.id === parseInt(id));
  if (userIndex !== -1) {
    userdata.splice(userIndex, 1);
    res.json({ message: "User deleted successfully" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

app.listen(3000, () => {
  console.log("Server running on port 3000");
});