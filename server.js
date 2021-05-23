// Dependencies
const express = require("express");
const routes = require("./controllers");
/* const sequelize = require("./config/connection"); */
const exphbs = require("express-handlebars");

// Express App setup
const app = express();
const PORT = process.env.PORT || 3001;

// Handlebars setup as default template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);



// turn on connection to db and server
/* sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
}); */


app.listen(PORT, () => {
  console.log('App listening on PORT ' + PORT);
});