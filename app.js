
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 3000;
const SECRET_KEY = "your_secret_key";

app.use(express.json());

app.post("/login", (req, res) => {
    const { username, password } =
        req.body;

 
const payload = {
    username,
    password,
}

const token = jwt.sign(
    payload,
    SECRET_KEY,
    { expiresIn: "1h" },
);
    res.json({ token });
    
});

app.listen(PORT, () =>console.log(`listening on ${PORT}`));