const express = require('express');
const { messages } = require('./index.js')

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));

app.get('/', ( req, res ) => {
  res.render("index", {title: "Mini Messageboard", messages: messages});
});

app.get('/new', (req, res) => {
  res.render("form", {title: "New Message"});
})

app.post('/new', (req, res) => {
  const messageUser = req.body.fname;
  const messageText = req.body.fmessage;

  messages.push({ text: messageText, user: messageUser, added: new Date() });

  res.redirect("/");
});

app.listen(PORT, () => {
  console.log("Express app is running on ", PORT);
  
})