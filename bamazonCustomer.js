var inquirer = require("inquirer");
var mysql = require("mysql");


var connection = mysql.createConnection({
  host: "localhost",

  // Port
  port: 3306,

  // Username
  user: "root",

  // Your password
  password: "CodyParkey1!",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  afterConnection();

});
  
  // Create a "Prompt" with a series of questions.
  inquirer
    .prompt([
      // Here we create a basic text prompt.
      {
        type: "input",
        message: "What is the ID of the product they would like to buy?",
        name: "id"
      },
      // Here we create a basic password-protected text prompt.
      {
        type: "input",
        message: "How many units of this would you like to buy?",
        name: "amount"
      }

    ])
  // .then(function (inquirerResponse) {
  //   if (inquirerResponse.id == "1") {
  //     console.log("\nWe can Get You" + bmazon.product_title);
  //     console.log("\nThere are total: " + bmazon.stock_quantity);
  //   } else if (inquirerResponse.service_title == "Bid on an item") {
  //     console.log("\nWelcome " + inquirerResponse.name);
  //     console.log("Lets " + great_bay_db.service_title + "!\n");
  //     listItems();
  //   } else {
  //     console.log("\nThat's okay " + inquirerResponse.name + ", come again when you are ready!\n");
  //   }
  // });

  // });
  function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    })
  }