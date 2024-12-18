const express = require('express');
const { messages } = require('./index.js')

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

app.get('/', ( req, res ) => {
  res.render("index", {title: "Mini Messageboard", messages: messages});
});

app.get('/new', (req, res) => {

});



app.listen(PORT, () => {
  console.log("Express app is running on ", PORT);
  
})